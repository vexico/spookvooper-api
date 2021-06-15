import { QueueType } from './types/Types'
import { EntityUser } from './interfaces/Interfaces'

declare class ExchangeHub {
  private readonly connection
  onOffer: any
  onOfferCancel: any
  onTradeEvent: any
  onMessage: any
  onMessageHistory: any
  constructor ();
  private readonly start
  private readonly onClosed
  sendChatMessage (message: string, accountid: string, auth: EntityUser, ticker: string, tradeState: QueueType): Promise<any>;
  getMessageHistory (): Promise<any>;
}
export default ExchangeHub
