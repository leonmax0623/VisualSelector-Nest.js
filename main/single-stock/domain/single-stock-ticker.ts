import { Ticker } from '../../../domain/ticker';

export interface SingleStockTicker extends Ticker {
  description: string;
}
