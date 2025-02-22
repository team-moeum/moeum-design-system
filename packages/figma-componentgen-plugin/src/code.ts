import { defaultKeyValues } from "@moeum/shared/constants";

figma.showUI(__html__, { width: 400, height: 500 });

function init() {
  figma.clientStorage.getAsync("mappingTable").then((data) =>
    figma.ui.postMessage({
      type: "getMappingTable",
      payload: data || defaultKeyValues,
    })
  );
}

function getFigmaNodeProperties(node) {
  const baseProperties: Record<string, any> = {
    id: node.id,
    type: node.type,
    name: node.name,
    visible: node.visible,
    locked: node.locked,
    width: node.width,
    height: node.height,
    layoutSizingHorizontal: node.layoutSizingHorizontal,
    layoutSizingVertical: node.layoutSizingVertical,
  };

  if (node.children) {
    baseProperties.children = node.children.map(getFigmaNodeProperties);
  }

  // Type-specific properties
  switch (node.type) {
    case "RECTANGLE":
    case "ELLIPSE":
    case "POLYGON":
    case "STAR":
    case "VECTOR":
      return {
        ...baseProperties,
        fills: node.fills,
        strokes: node.strokes,
        strokeWeight: node.strokeWeight,
        cornerRadius: node.cornerRadius,
        bottomLeftRadius: node.bottomLeftRadius,
        bottomRightRadius: node.bottomRightRadius,
        topLeftRadius: node.topLeftRadius,
        topRightRadius: node.topRightRadius,
        opacity: node.opacity,
      };

    case "TEXT":
      return {
        ...baseProperties,
        characters: node.characters,
        fontSize: node.fontSize,
        fontName: node.fontName,
        textAlignHorizontal: node.textAlignHorizontal,
        textAlignVertical: node.textAlignVertical,
        fills: node.fills,
        opacity: node.opacity,
      };

    case "FRAME":
      return {
        ...baseProperties,
        layoutMode: node.layoutMode,
        primaryAxisAlignItems: node.primaryAxisAlignItems,
        counterAxisAlignItems: node.counterAxisAlignItems,
        itemSpacing: node.itemSpacing,
        layoutWrap: node.layoutWrap,
        paddingTop: node.paddingTop,
        paddingBottom: node.paddingBottom,
        paddingLeft: node.paddingLeft,
        paddingRight: node.paddingRight,
        opacity: node.opacity,
      };

    case "LINE":
      return {
        ...baseProperties,
        strokes: node.strokes,
        strokeWeight: node.strokeWeight,
      };

    case "COMPONENT":
    case "INSTANCE":
      return {
        ...baseProperties,
        componentProperties: node.componentProperties,
      };

    default:
      return baseProperties;
  }
}

figma.on("selectionchange", () => {
  const selection = figma.currentPage.selection;
  if (selection.length > 0) {
    figma.ui.postMessage({
      type: "selectionchange",
      /** Figma API 직렬화를 직접해줘야함  */
      payload: selection?.map(getFigmaNodeProperties),
    });
  }
});

figma.ui.onmessage = (msg) => {
  if (msg.type === "notify") {
    figma.notify(msg.message);
  }

  if (msg.type === "setMappingTable") {
    figma.clientStorage.setAsync("mappingTable", msg.data).then(() => {
      figma.clientStorage
        .getAsync("mappingTable")
        .then((data) =>
          figma.ui.postMessage({ type: "getMappingTable", payload: data })
        );
    });
  }
};

init();
