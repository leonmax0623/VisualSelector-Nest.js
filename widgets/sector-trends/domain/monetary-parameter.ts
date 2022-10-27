/**
 * The "Monetary" page parameter for the "Sector Trends" widget.
 */

import { Trend } from '../../../types/trend';

export interface MonetaryParameter {
  name: string;
  trend: Trend;
  order: number;
}
