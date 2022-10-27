import { Field } from '../../../domain/parameter';

export type MoneyFlowParameter = Field & {
  details: Field[];
};
