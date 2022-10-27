/**
 * Sector domain model for the "Risk-Reward Heatmap" widget.
 */

import { Sector } from '../../../domain/sector';
import { RiskRewardSectorChartData } from './risk-reward-sector-chart-data';

export interface RiskRewardSector extends Sector {
  risk: number;
  reward: number;
  chartData: RiskRewardSectorChartData[];
}
