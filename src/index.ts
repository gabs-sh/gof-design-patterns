import {
  BorderDecorator,
  TextView,
  VisualComponent,
} from "./structural/decorator";

const border = new BorderDecorator();
border.setComponent(new TextView());

const component: VisualComponent = border;
component.draw();
