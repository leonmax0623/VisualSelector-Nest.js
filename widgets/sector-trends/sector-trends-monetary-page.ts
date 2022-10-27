/**
 * The "Monetary" page request and response, for the "Sector Trends" widget.
 */

import { RPCMessage } from '../../types/rpc-message';
import { MonetaryChartData } from './domain/monetary-chart-data';
import { MonetaryIndicator } from './domain/monetary-indicator';
import { MonetaryParameter } from './domain/monetary-parameter';
import { SectorTrend } from './domain/sector-trends-sector';

export type SectorTrendsMonetaryPageRequest = void | Record<never, never>;

export interface SectorTrendsMonetaryPageRPCMessage extends RPCMessage {
  module: 'sectorsTrends';
  method: 'monetaryPage';
}

export interface SectorTrendsMonetaryPageResponse {
  sectors: SectorTrend[];
  parameterTrends: MonetaryParameter[];
  indicators: MonetaryIndicator[];
  chartData: MonetaryChartData;
}
