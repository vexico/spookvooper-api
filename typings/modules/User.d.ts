import { CreditAmount, PaymentEntity } from './types/Types'
import { ConfigUser } from './interfaces/Interfaces'
declare class User {
  private readonly accountid
  private readonly authkey
  constructor (config: ConfigUser);
  getUser (): Promise<any>;
  getUsername (): Promise<any>;
  getBalance (): Promise<any>;
  hasDiscordRole (role: string): Promise<any>;
  getDiscordRoles (): Promise<any>;
  sendCredits (amount: CreditAmount, to: PaymentEntity, reason: string): Promise<any>;
  getStockOffers (ticker: string): Promise<any>;
  buyStock (ticker: string, amount: number, price: CreditAmount): Promise<any>;
  sellStock (ticker: string, amount: number, price: CreditAmount): Promise<any>;
  cancelOffer (orderid: number): Promise<any>;
  get apikey (): string;
  set apikey (apikey: string);
  get svid (): string;
  set svid (svid: string);
  hasFossPp (): boolean;
}
export default User
