/* eslint-disable @typescript-eslint/no-floating-promises */

// SpookVooper API - modules/ExchangeHub.ts
// Written by Brendan Lane - https://brndnln.dev/

import { Observable } from 'rxjs'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

const URI = 'https://spookvooper.com/ExchangeHub'
const retryTime = 5
const retryTimeMS = retryTime * 1000

class ExchangeHub {
  private readonly connection = new HubConnectionBuilder()
    .withUrl(URI)
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build()

  public onOffer = new Observable((observer) => {
    this.connection.on('StockOffer', (offer) => {
      observer.next(offer)
    })
  })

  public onOfferCancel = new Observable((observer) => {
    this.connection.on('StockOfferCancel', (offer) => {
      observer.next(offer)
    })
  })

  public onTradeEvent = new Observable((observer) => {
    this.connection.on('StockTrade', (trade) => {
      observer.next(trade)
    })
  })

  public onMessage = new Observable((observer) => {
    this.connection.on('RecieveMessage', (message, mode) => {
      observer.next({ message, mode })
    })
  })

  public onMessageHistory = new Observable((observer) => {
    this.connection.on('RecieveMessageHistory', (messages, modes) => {
      observer.next({ messages, modes })
    })
  })

  constructor () {
    this.connection.onclose((e) => {
      this.onClosed(e)
    })

    this.start()
  }

  public async start (): Promise<void> {
    console.log(`ExchangeHub: Starting connection between local and ${URI}`)

    try {
      await this.connection.start()
      console.log('ExchangeHub: Connected!')
    } catch (e) {
      console.error('ExchangeHub Error: Connection failed while trying to establish a connection\n', e)
      console.log(`ExchangeHub: Retrying in ${retryTime} seconds`)
      setTimeout(() => {
        this.start()
      }, retryTimeMS)
    }
  }

  private async onClosed (e: any): Promise<void> {
    console.error('ExchangeHub Error: Connection closed unexpectedly', e)
    await this.start()
  }
}

export default ExchangeHub
