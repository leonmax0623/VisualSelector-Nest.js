/**
 * Base interface for remote procedure calls (RPC)
 */

export interface RPCMessage {
  module: string;
  method: string;
}
