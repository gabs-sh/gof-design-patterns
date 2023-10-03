import { TCPState } from "./TCPState";
import { TCPEstabilished } from "./states/TCPEstabilished";

export class TCPConnection {
  private _state: TCPState;

  constructor() {
    this._state = new TCPEstabilished(this, "Conexão estabilizada...");
  }

  get state(): TCPState {
    return this._state;
  }

  set state(state: TCPState) {
    this._state = state;
  }

  open() {
    this.state.open();
  }

  close() {
    this.state.close();
  }

  acknowledge() {
    this.state.acknowledge();
  }
}
