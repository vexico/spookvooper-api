import { EntityUser } from './interfaces/Interfaces'
import { CreditAmount, GroupMember, PaymentEntity } from './types/Types'
declare class Group {
  private readonly accountid
  constructor (svid: string);
  getGroup (): Promise<any>;
  sendCredits (amount: CreditAmount, to: PaymentEntity, reason: string, auth: EntityUser): Promise<any>;
  doesGroupExist (): Promise<any>;
  getGroupMembers (): Promise<any>;
  hasGroupPermission (user: GroupMember, permission: string): Promise<any>;
  get svid (): string;
  set svid (svid: string);
  getStockOffers (ticker: string): Promise<any>;
  buyStock (ticker: string, amount: number, price: CreditAmount, auth: EntityUser): Promise<any>;
  sellStock (ticker: string, amount: number, price: CreditAmount, auth: EntityUser): Promise<any>;
  cancelOffer (orderid: number, auth: EntityUser): Promise<any>;
}
export default Group
