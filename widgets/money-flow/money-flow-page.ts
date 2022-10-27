/**
 * Main page request and response, for the "Money Flow" widget.
 */

import { RPCMessage } from '../../types/rpc-message';
import { MoneyFlowSector } from './domain/money-flow-sector';

export type MoneyFlowPageRequest = void | Record<never, never>;

export interface MoneyFlowPageRPCMessage extends RPCMessage {
  module: 'moneyFlow';
  method: 'moneyFlowPage';
}

export interface MoneyFlowPageResponse {
  sectors: MoneyFlowSector[];
}
