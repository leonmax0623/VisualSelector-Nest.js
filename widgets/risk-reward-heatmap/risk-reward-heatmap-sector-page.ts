/**
 * Sector details page request and response, for the "Risk-Reward Heatmap" widget.
 */

import { Field } from '../../domain/parameter';
import { RPCMessage } from '../../types/rpc-message';
import { UID } from '../../types/uid';
import { RiskRewarParameter } from './domain/risk-reward-parameter';
import { RiskRewardSectorChartData } from './domain/risk-reward-sector-chart-data';

export type RiskRewardHeatmapSectorPageRequest = {
  sectorId: UID;
  preiod: number;
};

export interface RiskRewardHeatmapSectorPageRPCMessage extends RPCMessage {
  module: 'riskRewardHeatmap';
  method: 'riskRewardSectorPage';
}

export interface RiskRewardHeatmapSectorPageResponse {
  name: string;
  risk: Field[];
  reward: Field[];
  parameters: RiskRewarParameter[];
  chartData: RiskRewardSectorChartData[];
}
