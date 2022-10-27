/**
 * Ticker domain model.
 * Global for the application.
 */

import { UID } from '../types/uid';

export interface Ticker {
  id: UID;
  ticker: string;
  name: string;
}
