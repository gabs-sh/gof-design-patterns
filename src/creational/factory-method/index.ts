abstract class Document {
  abstract open(): void;
  abstract close(): void;
  abstract save(): void;
  abstract revert(): void;
}

abstract class Application {
  protected _documents: Document[];

  constructor() {
    this._documents = [];
  }

  abstract createDocument(): Document;

  newDocument(): void {
    const doc = this.createDocument();
    this._documents.push(doc);
    doc.open();
  }

  protected openDocument(): void {}

  get documents(): Document[] {
    return this._documents;
  }
}

class MyDocument extends Document {
  open(): void {
    console.log("abrindo MyDocument");
  }
  close(): void {
    console.log("fechando MyDocument");
  }
  save(): void {
    console.log("salvando MyDocument");
  }
  revert(): void {
    console.log("revertendo MyDocument");
  }
}

class MyDocument2 extends Document {
  open(): void {
    console.log("abrindo MyDocument 2");
  }
  close(): void {
    console.log("fechando MyDocument 2");
  }
  save(): void {
    console.log("salvando MyDocument 2");
  }
  revert(): void {
    console.log("revertendo MyDocument 2");
  }
}

export class MyApplication extends Application {
  createDocument(): Document {
    console.log("criando documento...");
    return new MyDocument2();
  }
}
