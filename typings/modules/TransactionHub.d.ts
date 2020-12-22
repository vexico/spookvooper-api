import { Observable } from 'rxjs'
declare class TransactionHub {
  private readonly connection
  private readonly val
  fromAccount: string
  toAccount: string
  event: Observable<unknown>
  constructor ();
  start (): Promise<void>;
  private readonly onClosed
}
export default TransactionHub
