import { RPCMessage } from '../../types/rpc-message';
import { SectorsAndIndustriesSector } from './domain/sectors-and-industries-sector';

export type SectorsAndIndustriesPageRequest = void | Record<never, never>;

export interface SectorsAndIndustriesPageRPCMessage extends RPCMessage {
  module: 'sectorsAndIndustries';
  method: 'sectorsAndIndustriesPage';
}

export interface SectorsAndIndustriesPageResponse {
  sectors: SectorsAndIndustriesSector[];
}
