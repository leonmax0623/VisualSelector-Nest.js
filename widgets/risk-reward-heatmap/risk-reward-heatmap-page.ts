/**
 * Main page request and response, for the "Risk-Reward Heatmap" widget.
 */

import { RPCMessage } from '../../types/rpc-message';
import { RiskRewardSector } from './domain/risk-reward-sector';

export type RiskRewardHeatmapPageRequest = void | Record<never, never>;

export interface RiskRewardHeatmapPageRPCMessage extends RPCMessage {
  module: 'riskRewardHeatmap';
  method: 'riskRewardPage';
}

export interface RiskRewardHeatmapPageResponse {
  sectors: RiskRewardSector[];
}
