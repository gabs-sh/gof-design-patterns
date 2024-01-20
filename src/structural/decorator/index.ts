export abstract class VisualComponent {
  abstract draw(): void;
}

export class TextView extends VisualComponent {
  draw(): void {
    console.log("Desenhando uma fodenda linha");
  }
}

export class Decorator extends VisualComponent {
  private component: VisualComponent;

  setComponent(component: VisualComponent) {
    this.component = component;
  }

  draw(): void {
    this.component.draw();
  }
}

export class BorderDecorator extends Decorator {
  draw(): void {
    super.draw();
  }

  drawBorder(): void {
    console.log("desenhando borda");
  }
}

export class ScrollDecorator extends Decorator {
  draw(): void {
    super.draw();
  }

  scrollTo(): void {
    console.log("scrollando pela tela");
  }
}
