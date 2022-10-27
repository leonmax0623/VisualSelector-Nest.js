import { ParameterGroup } from '../types/parameter-group';
import { RiskLevel } from '../types/risk-level';

export interface FundamentalRatio {
  name: string;
  group: ParameterGroup;
  reading: {
    value: number;
    level: RiskLevel;
  };
  vsSector: number;
  vsMarket: number;
}
