/**
 * Sector domain model for the "Sector Trends" widget.
 */

import { Sector } from '../../../domain/sector';
import { CycleSectorTrend } from '../types/cycle-sector-trend';
import { MonetarySectorTrend } from '../types/monetary-sector-trend';

export interface SectorTrend extends Sector {
  cycleTrend: CycleSectorTrend;
  monetaryTrend: MonetarySectorTrend;
}
