import { Editor, LineShape, TextShape, TextView } from "./structural/adapter";

const editor = new Editor();

const lineShape = new LineShape();

const textView = new TextView();

const textShape = new TextShape(textView);

// editor.shape = lineShape;

// editor.shape.BoundingBox();

editor.shape = textShape;

editor.shape.BoundingBox();

editor.shape.CreateManipulator().Drag();
