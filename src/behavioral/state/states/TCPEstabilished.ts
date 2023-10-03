import { TCPState } from "../TCPState";
import { TCPClose } from "./TCPClose";
import { TCPListen } from "./TCPListen";

export class TCPEstabilished extends TCPState {
  open() {
    console.log("Conexão já está aberta");
  }
  close() {
    this.context.state = new TCPClose(this.context, "Conexão fechada...");
  }
  acknowledge() {
    this.context.state = new TCPListen(this.context, "Conexão aguardando...");
  }
}
