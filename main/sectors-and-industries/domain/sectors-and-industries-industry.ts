import { Industry } from '../../../domain/industry';
import { RiskLevel } from '../../../types/risk-level';

export interface SectorsAndIndustriesIndustry extends Industry {
  value: RiskLevel;
  growth: RiskLevel;
  flows: RiskLevel;
  estimates: RiskLevel;
}
