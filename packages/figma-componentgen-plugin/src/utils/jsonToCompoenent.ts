import { CSSProperties } from "react";

export type ComponentNodeType = {
  component: string;
  props?: Record<string, string>;
  children?: ComponentNodeType[];
  text?: string;
  style?: CSSProperties;
};

export const jsonToComponent = (json: ComponentNodeType): string => {
  const processNode = (
    node: ComponentNodeType,
    indentLevel: number = 0
  ): string => {
    const indent = "  ".repeat(indentLevel);
    let result = "";

    // 함수 선언 시작
    if (indentLevel === 0) {
      // 추가 들여쓰기 레벨 적용
      indentLevel += 1;
    }

    // Opening tag
    result += `${indent}<${node.component}`;

    // Add props if they exist
    if (node.props && Object.keys(node.props).length > 0) {
      const propsStr = Object.entries(node.props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ");
      result += ` ${propsStr}`;
    } else if (node.style) {
      result += ` style={{ ${Object.entries(node.style)
        .map(
          ([key, value]) =>
            `${key}: ${typeof value === "number" ? value : `'${value}'`}`
        )
        .join(", ")} }}`;
    }

    // Close opening tag
    result += ">";

    // Add text content if it exists
    if (node.text) {
      result += node.text;
    }

    // Process children
    if (node.children && node.children.length > 0) {
      result += "\n";
      node.children.forEach((child) => {
        result += processNode(child, indentLevel + 1);
      });
      result += indent;
    }

    // Closing tag
    result += `</${node.component}>\n`;

    return result;
  };

  return processNode(json);
};
