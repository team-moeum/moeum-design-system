import { CSSProperties } from "react";
import { FigmaProperty } from "./figma";

export interface LayerNode {
  name: string;
  type: string;
  property?: FigmaProperty;
  children?: LayerNode[];
  text?: string;
  style?: CSSProperties;
}
