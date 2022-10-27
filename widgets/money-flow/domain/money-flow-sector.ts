import { Field } from '../../../domain/parameter';
import { Sector } from '../../../domain/sector';
import { SentimentTrend } from '../type/sentiment-trend';

export interface MoneyFlowSector extends Sector {
  sentiment: {
    value: number;
    trend: SentimentTrend;
  };
  parameters: Field[];
}
