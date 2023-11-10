export class Editor {
  private _shape: Shape;

  get shape(): Shape {
    return this._shape;
  }

  set shape(shape: Shape) {
    this._shape = shape;
  }
}

abstract class Manipulator {
  abstract Drag(): void;
}

abstract class Shape {
  abstract BoundingBox(): void;
  abstract CreateManipulator(): Manipulator;
}

class LineManipulator extends Manipulator {
  Drag() {
    console.log("Dragging Line");
  }
}

export class LineShape extends Shape {
  BoundingBox(): void {
    console.log("fácil de fazer");
  }
  CreateManipulator(): Manipulator {
    return new LineManipulator();
  }
}

/**
 * `Adaptee`
 * De Terceiros (A ser adaptada)
 */
export class TextView {
  GetExtent(): void {
    console.log(
      "Funcionalidade de terceiros; Abstração de uma funcionalidade difícil"
    );
  }
}

class TextManipulator extends Manipulator {
  Drag() {
    console.log("Dragging Text");
  }
}

/**
 *  `Adapter`
 * Neste caso estamos usando um adapter de objeto (pois há referência pra um objeto extra),
 * e usamos o método do objeto extra dentro do método herdado da classe shape.
 * A única diferença entre um adapter de objeto para um de classe, é que ao invés de manter uma ref
 * para um objeto (nesse caso uma propriedade), faríamos herança múltipla (no caso do typescript, um extends e um implements)
 * Nesse caso, TextShape poderia fazer um implements de Shape
 * (poderíamos modificar Shape para ser uma interface) e um extends das funcionalidades
 * da classe externa (neste exemplo TextView) e usar essas funcionalidades herdadas dentro
 * do método adaptado (neste caso BoudingBox)
 * */
export class TextShape extends Shape {
  private textView: TextView; // há um problema pois nosso objeto de domínio tem referência a algo externo (será?)

  constructor(textView: TextView) {
    super();
    this.textView = textView;
  }

  // pode ter lógica subjacente aqui
  BoundingBox(): void {
    console.log("difícil de fazer, vamos adaptar algo já pronto");
    this.textView.GetExtent();
  }

  CreateManipulator(): Manipulator {
    return new TextManipulator();
  }
}
