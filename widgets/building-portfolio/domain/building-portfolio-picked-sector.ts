import { Sector } from '../../../domain/sector';
import { Trend } from '../../../types/trend';
import { BuildingPortfolioTicker } from './building-portfolio-ticker';

export interface BuildingPortfolioPickedSector extends Sector {
  trend: Trend;
  tickers: BuildingPortfolioTicker[];
}
