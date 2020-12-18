// SpookVooper API - modules/TransactionHub.ts
// Written by Brendan Lane - https://brndnln.dev/

// import { Observable } from 'rxjs'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { ReturnedTransaction } from './interfaces/Interfaces'

const URI = 'https://spookvooper.com/transactionHub'

class TransactionHub {
  private readonly connection = new HubConnectionBuilder()
    .withUrl(URI)
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build()

  public event

  private val: ReturnedTransaction

  public fromAccount: string
  public toAccount: string

  constructor () {
    this.connection.on('NotifyTransaction', (recieved: string) => {
      this.val = JSON.parse(recieved)
      this.fromAccount = this.val.FromAccount
      this.toAccount = this.val.ToAccount
    })
  }
}

export default TransactionHub
