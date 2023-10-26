export class Composition {
  private compositor: Compositor;
  private text: string;

  constructor(compositor: Compositor) {
    this.compositor = compositor;
  }

  setText(text: string) {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }

  setCompositor(compositor: Compositor) {
    this.compositor = compositor;
  }

  Traverse(): void {}

  Repair(): void {
    console.log("Reparando...");
    this.compositor.Compose();
  }
}

export abstract class Compositor {
  // posso passar o composition aqui se necessário
  abstract Compose(): void;
}

export class SimpleCompositor extends Compositor {
  Compose(): void {
    console.log("SimpleCompositor");
  }
}

export class TexCompositor extends Compositor {
  Compose(): void {
    console.log("TexCompositor");
  }
}

export class ArrayCompositor extends Compositor {
  Compose(): void {
    console.log("ArrayCompositor");
  }
}
