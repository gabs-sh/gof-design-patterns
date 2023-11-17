export interface Handler {
  setNext(handler: Handler): Handler;
  handle(data: string): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(data: string): string | null {
    if (this.nextHandler) return this.nextHandler.handle(data);
    return null;
  }
}

export class Handler1 extends AbstractHandler {
  handle(data: string): string | null {
    if (data === "string1") {
      return "ok eu lidei com isso (handler 1)";
    }
    console.log("handler 1 não conseguiu processar, passando pro próximo");
    return super.handle(data);
  }
}

export class Handler2 extends AbstractHandler {
  handle(data: string): string | null {
    if (data === "string2") {
      return "ok eu lidei com isso (handler 2)";
    }
    console.log("handler 2 não conseguiu processar, passando pro próximo");
    return super.handle(data);
  }
}

export class Handler3 extends AbstractHandler {
  handle(data: string): string | null {
    if (data === "string3") {
      return "ok eu lidei com isso (handler 3)";
    }
    console.log("handler 3 não conseguiu processar, passando pro próximo");
    return super.handle(data);
  }
}
