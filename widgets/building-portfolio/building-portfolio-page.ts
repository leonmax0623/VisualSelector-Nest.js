/**
 * Main page request and response, for the "Building Portfolio" widget.
 */

import { RPCMessage } from '../../types/rpc-message';
import { BuildingPortfolioPickedSector } from './domain/building-portfolio-picked-sector';
import { BuildingPortfolioSector } from './domain/building-portfolio-sector';
import {ParameterWithColor} from "../../domain/parameter";

export type BuildingPortfolioPageRequest = void | Record<never, never>;

export interface BuildingPortfolioPageRPCMessage extends RPCMessage {
  module: 'buildingPortfolio';
  method: 'buildingPortfolioPage';
}

export interface BuildingPortfolioPageResponse {
  sectors: BuildingPortfolioSector[];
  pickedSectors: BuildingPortfolioPickedSector[];
  considerSectors: BuildingPortfolioPickedSector[];
  parameters?: ParameterWithColor[];
}
