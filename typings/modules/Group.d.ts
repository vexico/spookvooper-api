import { AuthEntity, CreditAmount, GroupMember, PaymentEntity } from './types/Types'
declare class Group {
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private accountid
  constructor (svid: string)
  getGroup (): Promise<any>
  sendCredits (amount: CreditAmount, to: PaymentEntity, reason: string, auth: AuthEntity): Promise<any>
  doesGroupExist (): Promise<any>
  getGroupMembers (): Promise<any>
  hasGroupPermission (user: GroupMember, permission: string): Promise<any>
  get svid (): string
  set svid (svid: string)
}
export default Group
