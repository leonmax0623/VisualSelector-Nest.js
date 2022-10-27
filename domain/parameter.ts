/**
 * Parameter domain model.
 * Any kind of a parameter with some value for one of the app entities, such as Sector/Ticker.
 * Global for the application.
 */

import { ParameterGroup } from '../types/parameter-group';
import { Trend } from '../types/trend';
import {ParametersColors} from "../types/parameter-colors-type";

export interface Field<ValueType extends string | number = string | number> {
  name: string;
  value: ValueType;
  displayedValue: string;
  unit?: string;
}

export interface Parameter extends Field {
  group: ParameterGroup;
  difference?: number;
  displayedDifference?: string;
}

export interface ParameterWithTrend extends Parameter {
  trend: Trend;
}

export interface ParameterWithColor extends Parameter {
  color?: keyof typeof ParametersColors;
}
