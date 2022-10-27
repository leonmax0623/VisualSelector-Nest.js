import { Ticker } from '../../../domain/ticker';
import { RiskLevel } from '../../../types/risk-level';
import { PortfolioTickerSector } from './portfolio-ticker-sector';

export interface PortfolioTicker extends Ticker {
  sector: PortfolioTickerSector;
  price: {
    value: string;
    difference: number;
  };
  profit: {
    value: string;
    difference: number;
  };
  sourceOfRisk: {
    technical: RiskLevel;
    fundamental: RiskLevel;
  };
  targetPrice: {
    value: string;
    difference: number;
  };
  isHighRisk: boolean;
}
