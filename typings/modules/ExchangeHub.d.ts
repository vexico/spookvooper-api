import { Observable } from 'rxjs'
import { AuthEntity, QueueType } from './types/Types'
declare class ExchangeHub {
  private readonly connection
  onOffer: Observable<unknown>
  onOfferCancel: Observable<unknown>
  onTradeEvent: Observable<unknown>
  onMessage: Observable<unknown>
  onMessageHistory: Observable<unknown>
  constructor ();
  private readonly start
  private readonly onClosed
  sendChatMessage (message: string, accountid: string, auth: AuthEntity, ticker: string, tradeState: QueueType): Promise<any>;
  getMessageHistory (): Promise<any>;
}
export default ExchangeHub
