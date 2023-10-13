import { Singleton } from "./creational/singleton";

const singleton = Singleton.instance();
const singleton2 = Singleton.instance();

console.log(singleton2.getInstancesQuantity());
