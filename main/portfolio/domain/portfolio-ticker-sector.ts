import { Sector } from '../../../domain/sector';
import { RiskLevel } from '../../../types/risk-level';
import { TrendType } from '../../../types/trend-type';

export interface PortfolioTickerSector extends Sector {
  risk: RiskLevel;
  trend: TrendType;
}
