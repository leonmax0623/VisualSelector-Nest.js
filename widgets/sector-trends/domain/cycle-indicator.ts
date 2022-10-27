/**
 * The "Cycle" page indicator for the "Sector Trends" widget.
 */

import { CycleStage } from '../types/cycle-stage';

export interface CycleIndicator {
  name: string;
  readings: {
    difference: number;
    value: number;
  };
  cycleStage: CycleStage;
  nextAction: string;
}
