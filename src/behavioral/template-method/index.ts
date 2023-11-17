abstract class AbstractTemplateMethodClass {
  // comportamento padrão 1
  private commonMethod1(): void {
    console.log("common method 1");
  }

  // comportamento padrão 2
  private commonMethod2(): void {
    console.log("common method 2");
  }

  // comportamento específico (deve ser implementado pelo cliente)
  abstract specificMethod(): void;

  // executa na ordem que é comum a duas ou mais classes
  // pode ser sobrescrito e ser chamado através de super.exec()
  public exec() {
    this.commonMethod1();
    this.specificMethod();
    this.commonMethod2();
  }
}

export class ConcreteTemplateMethod1 extends AbstractTemplateMethodClass {
  specificMethod(): void {
    console.log("specific method 1");
  }
}

export class ConcreteTemplateMethod2 extends AbstractTemplateMethodClass {
  specificMethod(): void {
    console.log("specific method 2");
  }

  exec() {
    super.exec();
    console.log("adição ao exec");
  }
}

export const clientCode = () => {
  console.log("Executando 1...");
  const template1 = new ConcreteTemplateMethod1();
  template1.exec();

  console.log("Executando 2...");
  const template2 = new ConcreteTemplateMethod2();
  template2.exec();
};
