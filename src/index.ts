import {
  Handler,
  Handler1,
  Handler2,
  Handler3,
} from "./behavioral/chain-of-responsability";

function exec(handler: Handler) {
  const strings = ["string2", "string3", "string1"];

  for (const data of strings) {
    const result = handler.handle(data);
    if (result) {
      console.log(`consegui processar: ${result}`);
    } else {
      console.log(`nenhum handler conseguiu processar o dado: ${data}`);
    }
  }
}

const handler1 = new Handler1();
const handler2 = new Handler2();
const handler3 = new Handler3();

// criando a cadeia
handler1.setNext(handler2).setNext(handler3);

exec(handler1);
