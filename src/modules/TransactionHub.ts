/* eslint-disable @typescript-eslint/no-floating-promises */

// SpookVooper API - modules/TransactionHub.ts
// Written by Brendan Lane - https://brndnln.dev/

import { Observable } from 'rxjs'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { ReturnedTransaction } from './interfaces/Interfaces'

const URI = 'https://spookvooper.com/transactionHub'
const retryTime = 5
const retryTimeMS = retryTime * 1000

const fancy = true

class TransactionHub {
  private readonly connection = new HubConnectionBuilder()
    .withUrl(URI)
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build()

  private val: ReturnedTransaction

  public fromAccount: string
  public toAccount: string

  public event = new Observable((observer) => {
    this.connection.on('NotifyTransaction', (recieved: string) => {
      this.val = JSON.parse(recieved)
      this.fromAccount = this.val.FromAccount
      this.toAccount = this.val.ToAccount

      observer.next(this.val)
    })
  })

  constructor () {
    this.connection.onclose(function (e: any): void {
      this.onClosed(e)
    })
  }

  public async start (): Promise<void> {
    console.log(`[TransactionHub] Starting connection between local and ${URI}`)

    try {
      await this.connection.start()
      console.log('[TransactionHub] Connected!')
    } catch (e) {
      if (fancy) {
        console.log('--------------------------------')
      }
      console.error('[TransactionHub] Error: Connection failed while trying to establish a connection\n', e)
      if (fancy) {
        console.log('--------------------------------')
      }
      console.log(`[TransactionHub] Retrying in ${retryTime} seconds`)
      setTimeout(() => {
        this.start()
      }, retryTimeMS)
    }
  }

  private async onClosed (e: any): Promise<void> {
    if (fancy) {
      console.log('--------------------------------')
    }
    console.error('[TransactionHub] Error: Connection closed unexpectedly', e)
    if (fancy) {
      console.log('--------------------------------')
    }

    await this.start()
  }
}

export default TransactionHub
