import { QueueType } from './types/Types'

declare class Stock {
  private readonly stockTicker
  get ticker (): string;
  set ticker (ticker: string);
  constructor (ticker: string);
  getValue (): Promise<any>;
  getBuyPrice (): Promise<any>;
  getQueueInfo (type: QueueType): Promise<any>;
  getOwnerData (): Promise<any>;
}
export default Stock
