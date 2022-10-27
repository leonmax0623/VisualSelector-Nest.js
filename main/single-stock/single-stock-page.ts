/**
 * Ticker details page interfaces.
 */

import { Field } from '../../domain/parameter';
import { RPCMessage } from '../../types/rpc-message';
import { UID } from '../../types/uid';
import { FundamentalRatio } from '../../domain/fundamental-ratio';
import { SingleStockOverviewChartItem } from './domain/single-stock-overview-chart-item';
import { SingleStockTicker } from './domain/single-stock-ticker';

export interface SingleStockPageRequest {
  tickerId: UID;
}

export interface SingleStockPageRPCMessage extends RPCMessage {
  module: 'singleStock';
  method: 'singleStockPage';
}

export interface SingleStockPageResponse {
  ticker: SingleStockTicker;
  overviewChartData: SingleStockOverviewChartItem[];
  keyRisks: string[];
  keyOpportunities: string[];
  fundamentalRatios: FundamentalRatio[];
  technicalIndicators: Field[];
}
