import { CSSProperties } from "react";
import { LayerNode } from "../type/layer";
import { ComponentNode, MappingTableType } from "../type/component";
import { ComponentException } from "../exception/ComponentException";
import { FigmaProperty } from "@moeum/shared/type/figma";

export class Component {
  constructor(
    private readonly name: string,
    private readonly type: string,
    private readonly style: CSSProperties,
    private readonly props: Record<string, string | boolean>,
    private readonly children?: Component[],
    private readonly text?: string
  ) {
    this.validateComponentName(name);
    this.validateComponentType(type);
  }

  toJSON(): ComponentNode {
    return {
      component: this.type,
      props: this.props,
      style: this.style,
      text: this.text,
      children: this.children?.map((child) => child.toJSON()),
    };
  }

  static fromLayer(
    layerNode: LayerNode,
    mappingTable: MappingTableType
  ): Component {
    const type = this.getComponentType(layerNode, mappingTable);
    const props = layerNode.property ? this.toProps(layerNode.property) : {};

    return new Component(
      layerNode.name,
      type,
      layerNode.style || {},
      props,
      layerNode.children?.map((child) =>
        Component.fromLayer(child, mappingTable)
      ),
      layerNode.text
    );
  }

  private static toProps(property: FigmaProperty): Record<string, any> {
    const props: Record<string, string | boolean> = {};

    Object.entries(property).forEach(([key, value]) => {
      if (value && "value" in value) {
        props[key] = value.value;
      }
    });

    return props;
  }

  /** Component Mapping  */
  private static getComponentType(
    node: LayerNode,
    table: MappingTableType
  ): string {
    const mapping = table.find((item) => item.key === node.type);
    const defaultMapping = table.find((item) => item.key === "DEFAULT");

    if (!mapping) {
      if (!defaultMapping) {
        throw new ComponentException("No component mapping found");
      }
      return defaultMapping.value as string;
    }

    if (typeof mapping.value === "string") {
      return mapping.value || (defaultMapping.value as string);
    }

    return mapping.value[node.name] || (defaultMapping.value as string);
  }

  /** 도메인 규칙
   * Component Name은 필수 값이다.
   * Component Name은 lowerCase 여야 한다.
   */
  private validateComponentName(name: string) {
    if (!name) {
      throw new ComponentException("Component name is required");
    }
    // if (!/^[a-zA-Z0-9]*$/.test(name)) {
    //   throw new ComponentException("Component name must be in lowerCase");
    // }
  }

  /** 도메인 규칙
   * Component Type은 필수 값이다.
   */
  private validateComponentType(type: string) {
    if (!type) {
      throw new ComponentException("Component type is required");
    }
  }

  /** ComponentNode to React Component string  */
  toComponent(): string {
    let result = `<${this.type}`;

    if (Object.keys(this.props).length > 0) {
      result += ` ${this.propsToString()}`;
    }

    if (Object.keys(this.style).length > 0) {
      result += ` style={{ ${this.styleToString()} }}`;
    }

    result += ">";

    if (this.text) {
      result += this.text;
    }

    if (this.children?.length) {
      result += "\n";
      this.children.forEach((child) => {
        result += `  ${child.toComponent()}\n`;
      });
    }

    result += `</${this.type}>`;
    return result;
  }

  private propsToString(): string {
    return Object.entries(this.props)
      ?.map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  }

  private styleToString(): string {
    return Object.entries(this.style)
      ?.map(
        ([key, value]) =>
          `${key}: ${typeof value === "number" ? value : `'${value}'`}`
      )
      .join(", ");
  }
}
