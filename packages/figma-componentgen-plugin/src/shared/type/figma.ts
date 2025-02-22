import { CSSProperties } from "react";

export interface FigmaVariant {
  value: string;
  type: string;
  boundVariables: Record<string, unknown>;
}

export interface FigmaProperty {
  [key: string]: {
    type: ComponentPropertyType;
    value: string | boolean;
    preferredValues?: InstanceSwapPreferredValue[];
    readonly boundVariables?: {
      value?: VariableAlias;
    };
  };
}

export interface FigmaNode {
  name: string;
  type: string;
  property?: FigmaProperty;
  children?: FigmaNode[];
  text?: string;
  style?: CSSProperties;
}
