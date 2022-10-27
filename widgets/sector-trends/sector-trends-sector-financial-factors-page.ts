/**
 * The "Financial Factors" page request and response, for the "Sector Trends" widget.
 */

import { RPCMessage } from '../../types/rpc-message';
import { Trend } from '../../types/trend';
import { UID } from '../../types/uid';
import {
  FactorParameter,
  FactorParameterWithTrend,
} from './types/factor-parameter';

export type SectorTrendsSectorFinancialFactorsPageRequest = {
  sectorId: UID;
  group: string;
};

export interface SectorTrendsSectorFinancialFactorsRPCMessage
  extends RPCMessage {
  module: 'sectorsTrends';
  method: 'financialFactorsPage';
}

export interface SectorTrendsSectorFinancialFactorsPageResponse {
  averageTrend: Trend;
  probability: number;
  factors: Array<
    FactorParameterWithTrend & {
      subFactors?: FactorParameter[];
    }
  >;
}
