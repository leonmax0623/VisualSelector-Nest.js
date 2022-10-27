/**
 * Ticker details page interfaces.
 */

import { FundamentalRatio } from '../../domain/fundamental-ratio';
import { Field } from '../../domain/parameter';
import { RPCMessage } from '../../types/rpc-message';
import { UID } from '../../types/uid';
import { SingleSectorKeyFactor } from './domain/single-sector-key-factor';
import { SingleSectorOverviewChartItem } from './domain/single-sector-overview-chart-item';
import { SingleSectorParametersUpdates } from './domain/single-sector-parameters-updates';
import { SingleSectorSector } from './domain/single-sector-sector';
import { SingleSectorSentiment } from './domain/single-sector-sentiment';

export interface SingleSectorPageRequest {
  sectorId: UID;
}

export interface SingleSectorPageRPCMessage extends RPCMessage {
  module: 'singleSector';
  method: 'singleSectorPage';
}

export interface SingleSectorPageResponse {
  sector: SingleSectorSector;
  overviewChartData: SingleSectorOverviewChartItem[];
  keyRisks: string[];
  keyOpportunities: string[];
  scenario: string;
  description: string;
  tradePlan: {
    cycleStage: string;
    macroTrends: string;
    moneyFlow: string;
  };
  probability: string;
  keyFactors: SingleSectorKeyFactor[];
  sentiment: SingleSectorSentiment[];
  lastSectorUpdates: string[];
  fundamentalsUpdates: SingleSectorParametersUpdates;
  technicalsUpdates: SingleSectorParametersUpdates;
  fundamentalRatios: FundamentalRatio[];
  technicalIndicators: Field[];
}
