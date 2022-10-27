/**
 * Main page request and response, for the "Money Flow" widget.
 */

import { RPCMessage } from '../../types/rpc-message';
import { UID } from '../../types/uid';
import { MoneyFloWSectorData } from './domain/money-flow-sector-data';

export interface MoneyFlowSectorPageRequest {
  sectorId: UID;
}

export interface MoneyFlowSectorPageRPCMessage extends RPCMessage {
  module: 'moneyFlow';
  method: 'moneyFlowSectorPage';
}

export interface MoneyFlowSectorPageResponse {
  name: string;
  monthData: {
    month: string;
    data: MoneyFloWSectorData;
  }[];
}
