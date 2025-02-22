import { CSSProperties } from "react";

export type MappingTableType = {
  key: string;
  value: string | Record<string, string>;
}[];

export interface ComponentNode {
  component: string;
  props?: Record<string, string | boolean>;
  children?: ComponentNode[];
  text?: string;
  style?: CSSProperties;
}
