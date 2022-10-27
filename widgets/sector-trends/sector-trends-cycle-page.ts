/**
 * The "Cycle" page request and response, for the "Sector Trends" widget.
 */

import { RPCMessage } from '../../types/rpc-message';
import { CycleIndicator } from './domain/cycle-indicator';
import { SectorTrend } from './domain/sector-trends-sector';

export type SectorTrendsCyclePageRequest = void | Record<never, never>;

export interface SectorTrendsCyclePageRPCMessage extends RPCMessage {
  module: 'sectorsTrends';
  method: 'cyclePage';
}

export interface SectorTrendsCyclePageResponse {
  sectors: SectorTrend[];
  indicators: CycleIndicator[];
}
