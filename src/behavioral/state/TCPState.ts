import { TCPConnection } from "./TCPConnection";

export abstract class TCPState {
  constructor(protected context: TCPConnection, message: string) {
    console.log(message);
  }
  abstract open(): void;
  abstract close(): void;
  abstract acknowledge(): void;
}
