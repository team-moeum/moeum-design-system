import { CSSProperties } from "react";
import { LayerNode } from "../type/layer";
import { LayerException } from "../exception/LayerException";
import { FigmaProperty } from "@moeum/shared/type/figma";

export class Layer {
  constructor(
    private readonly name: string,
    private readonly type: string,
    private readonly style: CSSProperties,
    private readonly text?: string,
    private readonly children?: Layer[],
    private readonly componentProperties?: FigmaProperty
  ) {
    this.validateLayerName(name);
    this.validateLayerStyle(style);
  }

  static fromFigmaNode(node: SceneNode): Layer {
    const style = this.createStyle(node);
    return new Layer(
      node.name,
      node.type,
      style,
      node.type === "TEXT" ? (node as TextNode).characters : undefined,
      "children" in node
        ? node.children?.map((child) => Layer.fromFigmaNode(child))
        : undefined,
      "componentProperties" in node ? node.componentProperties : undefined
    );
  }

  /** 도메인 규칙
   * Layer 이름은 비어 있을 수 없다.
   */
  private validateLayerName(name: string) {
    if (!name || name.trim().length === 0) {
      throw new LayerException("Layer name cannot be empty");
    }
  }

  /** 도메인 규칙
   * TEXT 타입의 Layer는 반드시 font size를 가져야 한다.
   */
  private validateLayerStyle(style: CSSProperties) {
    if (this.type === "TEXT") {
      if (!style.fontSize) {
        throw new LayerException("Text layer must have font size");
      }
    }
  }

  private static createStyle(node: SceneNode): CSSProperties {
    return node.type === "TEXT"
      ? this.createTextStyle(node as TextNode)
      : this.createDefaultStyle(node);
  }

  private static createTextStyle(node: TextNode): CSSProperties {
    const style: CSSProperties = {
      fontSize: `${node.fontSize.toString()}px`,
      fontWeight: node.fontWeight as CSSProperties["fontWeight"],
      textAlign:
        node.textAlignHorizontal?.toLowerCase() === "JUSTIFIED"
          ? "justify"
          : (node.textAlignHorizontal?.toLowerCase() as CSSProperties["textAlign"]),
      verticalAlign: node.textAlignVertical?.toLowerCase(),
      whiteSpace: node.textAutoResize === "NONE" ? "nowrap" : "normal",
    };

    // Font Family
    if (typeof node.fontName === "object") {
      style.fontFamily = node.fontName.family;
    }

    // Spacing
    if (typeof node.letterSpacing === "object" && node.letterSpacing.value) {
      style.letterSpacing = `${node.letterSpacing.value}${
        node.letterSpacing.unit === "PIXELS" ? "px" : "%"
      }`;
    }

    if (typeof node.lineHeight === "object" && "value" in node.lineHeight) {
      style.lineHeight = `${node.lineHeight.value}${
        node.lineHeight.unit === "PIXELS" ? "px" : "%"
      }`;
    }

    // Layout sizing
    this.addLayoutSizing(node, style);

    return style;
  }

  private static createDefaultStyle(node: SceneNode): CSSProperties {
    const style: CSSProperties = {
      position: "relative",
    };

    // Layout sizing
    this.addLayoutSizing(node, style);

    // Padding
    this.addPadding(node, style);

    // Flex layout
    this.addFlexLayout(node, style);

    // Opacity
    if ("opacity" in node && node.opacity !== 1) {
      style.opacity = node.opacity;
    }

    // Border radius
    this.addBorderRadius(node, style);

    return style;
  }

  private static addLayoutSizing(node: SceneNode, style: CSSProperties) {
    if ("layoutSizingHorizontal" in node) {
      style.width =
        node.layoutSizingHorizontal === "FILL" ? "100%" : `${node.width}px`;
    }

    if ("layoutSizingVertical" in node) {
      style.height =
        node.layoutSizingVertical === "FILL" ? "100%" : `${node.height}px`;
    }
  }

  private static addPadding(node: SceneNode, style: CSSProperties) {
    if ("paddingTop" in node && node.paddingTop) {
      style.paddingTop = `${node.paddingTop}px`;
    }
    if ("paddingBottom" in node && node.paddingBottom) {
      style.paddingBottom = `${node.paddingBottom}px`;
    }
    if ("paddingRight" in node && node.paddingRight) {
      style.paddingRight = `${node.paddingRight}px`;
    }
    if ("paddingLeft" in node && node.paddingLeft) {
      style.paddingLeft = `${node.paddingLeft}px`;
    }
  }

  private static addFlexLayout(node: SceneNode, style: CSSProperties) {
    if ("layoutMode" in node) {
      style.display = "flex";
      style.flexDirection = node.layoutMode === "HORIZONTAL" ? "row" : "column";

      if ("itemSpacing" in node && node.itemSpacing) {
        style.gap = `${node.itemSpacing}px`;
      }

      if ("primaryAxisAlignItems" in node) {
        style.justifyContent = this.getJustifyContent(
          node.primaryAxisAlignItems
        );
      }

      if ("counterAxisAlignItems" in node) {
        style.alignItems = this.getAlignItems(node.counterAxisAlignItems);
      }

      if ("layoutWrap" in node) {
        style.flexWrap = node.layoutWrap === "WRAP" ? "wrap" : "nowrap";
      }
    }
  }

  private static addBorderRadius(node: SceneNode, style: CSSProperties) {
    if ("bottomLeftRadius" in node && node.bottomLeftRadius) {
      style.borderBottomLeftRadius = `${node.bottomLeftRadius}px`;
    }
    if ("bottomRightRadius" in node && node.bottomRightRadius) {
      style.borderBottomRightRadius = `${node.bottomRightRadius}px`;
    }
    if ("topLeftRadius" in node && node.topLeftRadius) {
      style.borderTopLeftRadius = `${node.topLeftRadius}px`;
    }
    if ("topRightRadius" in node && node.topRightRadius) {
      style.borderTopRightRadius = `${node.topRightRadius}px`;
    }
  }

  private static getJustifyContent(alignment: string): string {
    const map = {
      MIN: "flex-start",
      CENTER: "center",
      MAX: "flex-end",
      SPACE_BETWEEN: "space-between",
    };
    return map[alignment] || "flex-start";
  }

  private static getAlignItems(alignment: string): string {
    const map = {
      MIN: "flex-start",
      CENTER: "center",
      MAX: "flex-end",
      BASELINE: "baseline",
    };
    return map[alignment] || "stretch";
  }

  toJSON(): LayerNode {
    return {
      name: this.name,
      type: this.type,
      style: this.style,
      text: this.text,
      property: this.componentProperties,
      children: this.children?.map((child) => child.toJSON()),
    };
  }
}
