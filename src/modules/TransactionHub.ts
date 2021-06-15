/* eslint-disable @typescript-eslint/no-floating-promises */

// SpookVooper API - modules/TransactionHub.ts
// Written by Quinn Lane - https://quinnlane.dev/

import { Observable } from 'rxjs'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { ReturnedTransaction } from './interfaces/Interfaces'

const URI = 'https://spookvooper.com/transactionHub'
const retryTime = 5
const retryTimeMS = retryTime * 1000

class TransactionHub {
  private readonly connection = new HubConnectionBuilder()
    .withUrl(URI)
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build()

  private val: ReturnedTransaction

  public fromAccount: string
  public toAccount: string

  public fromType: string
  public toType: string

  public event = new Observable((observer) => {
    this.connection.on('NotifyTransaction', (recieved: string) => {
      this.val = JSON.parse(recieved)
      this.fromAccount = this.val.FromAccount
      this.toAccount = this.val.ToAccount

      if (this.fromAccount.startsWith('u-')) {
        this.fromType = 'user'
      } else if (this.fromAccount.startsWith('g-')) {
        this.fromType = 'group'
      } else {
        this.fromType = 'Error'
      }
      if (this.toAccount.startsWith('u-')) {
        this.toType = 'user'
      } else if (this.toAccount.startsWith('g-')) {
        this.toType = 'group'
      } else {
        this.toType = 'Error'
      }

      observer.next(this.val)
    })
  })

  constructor () {
    this.connection.onclose((e) => {
      this.onClosed(e)
    })

    this.start()
  }

  public async start (): Promise<void> {
    console.log(`TransactionHub: Starting connection between local and ${URI}`)

    try {
      await this.connection.start()
      console.log('TransactionHub: Connected!')
    } catch (e) {
      console.error('TransactionHub Error: Connection failed while trying to establish a connection\n', e)
      console.log(`TransactionHub: Retrying in ${retryTime} seconds`)
      setTimeout(() => {
        this.start()
      }, retryTimeMS)
    }
  }

  private async onClosed (e: any): Promise<void> {
    console.error('TransactionHub Error: Connection closed unexpectedly', e)
    await this.start()
  }
}

export default TransactionHub
