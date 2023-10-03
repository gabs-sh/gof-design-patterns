import { TCPState } from "../TCPState";
import { TCPClose } from "./TCPClose";

export class TCPListen extends TCPState {
  open() {
    console.log("Conexão já aberta, aguardando outras conexões...");
  }
  close() {
    this.context.state = new TCPClose(this.context, "Conexão fechada...");
  }
  acknowledge() {
    console.log("Ack connection");
  }
}
