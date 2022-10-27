import { Sector } from '../../../domain/sector';
import { Field } from '../../../domain/parameter';
import { TrendType } from '../../../types/trend-type';
import { RiskLevel } from '../../../types/risk-level';
import { SectorsAndIndustriesIndustry } from './sectors-and-industries-industry';

export interface SectorsAndIndustriesSector extends Sector {
  color: string;
  trend: TrendType;
  moneyFlows: {
    inflow: Field;
    outflow: Field;
  };
  keyFactor: string;
  sourceOfRisk: {
    technical: RiskLevel;
    fundamental: RiskLevel;
    sentiments: RiskLevel;
  };
  suggestedAllocation: number;
  industries: SectorsAndIndustriesIndustry[];
}
