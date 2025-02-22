import { CSSProperties } from "react";
import { MappingTableType } from "@moeum/shared/type/component";

type FigmaVariant = {
  value: string;
  type: string;
  boundVariables: Record<string, unknown>;
};

type FigmaProperty = {
  type?: FigmaVariant;
  states?: FigmaVariant;
  size?: FigmaVariant;
  [key: string]: FigmaVariant | undefined;
};

export type FigmaNode = {
  name: string;
  type: string;
  property?: FigmaProperty;
  children?: FigmaNode[];
  text?: string;
  style?: CSSProperties;
};

type ComponentNodeType = {
  component: string;
  props?: Record<string, string>;
  children?: ComponentNodeType[];
  text?: string;
  style?: CSSProperties;
};

export const figmaToJson = (
  figmaData: FigmaNode[],
  mappingTable: MappingTableType
): ComponentNodeType => {
  const processNode = (node: FigmaNode): ComponentNodeType => {
    const componentNode: ComponentNodeType = {
      component: getComponentType(node, mappingTable),
    };

    // Process properties
    if (node.property) {
      componentNode.props = processProperties(node.property);
    }

    // Process text nodes
    if (node.type === "TEXT") {
      componentNode.text = node.text;
    }

    // base styling
    if (node.style) {
      componentNode.style = node.style;
    }

    // Process children
    if (node.children && node.children.length > 0) {
      componentNode.children = node.children.map(processNode);
    }

    return componentNode;
  };

  const getComponentType = (
    node: FigmaNode,
    table: MappingTableType
  ): string => {
    const type = node.type;
    const name = node.name;
    const value = table.find((item) => item.key === type).value;
    const defaultValue = table.find((item) => item.key === "DEFAULT")
      .value as string;

    if (!value) return defaultValue;

    if (typeof value === "string") {
      return value;
    }

    return value[name] || defaultValue;
  };

  const processProperties = (
    property: FigmaProperty
  ): Record<string, string> => {
    const props: Record<string, string> = {};

    Object.entries(property).forEach(([key, value]) => {
      if (value && "value" in value) {
        props[key] = value.value;
      }
    });

    return props;
  };

  return processNode(figmaData[0]);
};
