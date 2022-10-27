import { PortfolioTicker } from './domain/portfolio-ticker';

export type PortfolioPageRequest = void | Record<never, never>;

export interface PortfolioPageResponse {
  tickers: PortfolioTicker[];
}
