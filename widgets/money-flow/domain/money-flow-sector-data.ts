import { Field } from '../../../domain/parameter';
import { MoneyFlowParameter } from './money-flow-parameter';

export interface MoneyFloWSectorData {
  difference: number;
  overview: Field[];
  levels: MoneyFlowParameter[];
  lastActivity: {
    daysCount: number;
    growthBets: string;
    declineBets: string;
    mostActiveTrades: MoneyFlowParameter;
  };
}
