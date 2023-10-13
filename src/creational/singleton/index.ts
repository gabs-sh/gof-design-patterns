export class Singleton {
  private static uniqueInstance: Singleton | null = null;
  private static instancesQuantity = 0;

  protected constructor() {
    Singleton.instancesQuantity++;
  }

  static instance(): Singleton {
    if (!Singleton.uniqueInstance) Singleton.uniqueInstance = new Singleton();

    return Singleton.uniqueInstance;
  }

  getInstancesQuantity(): number {
    return Singleton.instancesQuantity;
  }
}
