import { Ticker } from '../../../domain/ticker';
import { RiskSourceType } from '../../../types/risk-source-type';

export interface BuildingPortfolioTicker extends Ticker {
  priceChange5Days: {
    value: number;
    difference: number;
  };
  riskSource: {
    type: RiskSourceType;
    name: string;
  };
  targetPrice: {
    value: number;
    difference: number;
  };
}
