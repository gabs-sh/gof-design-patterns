import { TCPState } from "../TCPState";
import { TCPEstabilished } from "./TCPEstabilished";

export class TCPClose extends TCPState {
  open() {
    this.context.state = new TCPEstabilished(
      this.context,
      "Conexão fechada..."
    );
  }
  close() {
    console.log("Conexão já fechada...");
  }
  acknowledge() {
    console.log("Conexão fechada...");
  }
}
