import { Parameter, ParameterWithTrend } from '../../../domain/parameter';

export type FactorParameterWithTrend = Omit<ParameterWithTrend, 'group'>;
export type FactorParameter = Omit<Parameter, 'group'>;
