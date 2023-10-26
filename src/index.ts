import {
  Composition,
  SimpleCompositor,
  TexCompositor,
} from "./behavioral/strategy";

const simpleCompositor = new SimpleCompositor();

const composition = new Composition(simpleCompositor);

composition.Repair();

// const texCompositor = new TexCompositor();

// composition.setCompositor(texCompositor);

// composition.Repair();
