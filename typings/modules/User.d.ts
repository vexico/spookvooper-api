import { CreditAmount, PaymentEntity, SVStockTicker } from './types/Types'
import { ConfigUser } from './interfaces/Interfaces'
declare class User {
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private accountid
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private authkey
  constructor (config: ConfigUser)
  getUser (): Promise<any>
  getUsername (): Promise<any>
  getBalance (): Promise<any>
  hasDiscordRole (role: string): Promise<any>
  getDiscordRoles (): Promise<any>
  sendCredits (amount: CreditAmount, to: PaymentEntity, reason: string): Promise<any>
  getStockOffers (ticker: SVStockTicker): Promise<any>
  buyStock (ticker: SVStockTicker, amount: number, price: CreditAmount): Promise<any>
  sellStock (ticker: SVStockTicker, amount: number, price: CreditAmount): Promise<any>
  cancelOffer (orderid: number): Promise<any>
  get apikey (): string;
  set apikey (apikey: string);
  get svid (): string;
  set svid (svid: string);
}
export default User
