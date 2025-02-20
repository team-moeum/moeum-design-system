import { match, P } from "ts-pattern";
import { defaultKeyValues } from "./constants";

figma.showUI(__html__, { width: 400, height: 500 });

function getJustifyContent(alignment) {
  const map = {
    MIN: "flex-start",
    CENTER: "center",
    MAX: "flex-end",
    SPACE_BETWEEN: "space-between",
  };
  return map[alignment] || "flex-start";
}

function getAlignItems(alignment) {
  const map = {
    MIN: "flex-start",
    CENTER: "center",
    MAX: "flex-end",
    BASELINE: "baseline",
  };
  return map[alignment] || "stretch";
}

function getLayerInfo(node: SceneNode) {
  console.log(node, node.type);
  const info: Record<string, any> = {
    name: node.name,
    type: node.type,
  };

  match(node)
    .with({ componentProperties: P.any }, (node) => {
      info.property = node.componentProperties;
    })
    .otherwise(() => {});

  match(node)
    .with({ type: "TEXT" }, (node) => {
      info.text = node.characters;
      info.style = {
        fontSize: `${node.fontSize.toString()}px`,
        fontWeight: node.fontWeight,

        /** Text Align  */
        textAlign: node.textAlignHorizontal?.toLowerCase(),
        verticalAlign: node.textAlignVertical?.toLowerCase(),

        /** Newline  */
        whiteSpace: node.textAutoResize === "NONE" ? "nowrap" : "normal",
      };

      /** width 설정: Fill(auto layout)  */
      if ("layoutSizingHorizontal" in node) {
        info.style.width =
          node.layoutSizingHorizontal === "FILL" ? "100%" : `${node.width}px`;
      }

      /** height 설정: Fill(auto layout)  */
      if ("layoutSizingVertical" in node) {
        info.style.height =
          node.layoutSizingVertical === "FILL" ? "100%" : `${node.height}px`;
      }

      if (typeof node.fontName === "object") {
        info.style.fontFamily = node.fontName.family;
      }

      /** Spacing  */
      if (typeof node.letterSpacing === "object" && node.letterSpacing.value) {
        info.style.letterSpacing = `${node.letterSpacing.value}${node.letterSpacing.unit === "PIXELS" ? "px" : "%"}`;
      }

      if (typeof node.lineHeight === "object" && "value" in node.lineHeight) {
        info.style.lineHeight = `${node.lineHeight.value}${node.lineHeight.unit === "PIXELS" ? "px" : "%"}`;
      }
    })
    .otherwise(() => {
      info.style = {
        position: "relative",
      };
      /** width 설정: Fill(auto layout)  */
      if ("layoutSizingHorizontal" in node) {
        info.style.width =
          node.layoutSizingHorizontal === "FILL" ? "100%" : `${node.width}px`;
      }

      /** height 설정: Fill(auto layout)  */
      if ("layoutSizingVertical" in node) {
        info.style.height =
          node.layoutSizingVertical === "FILL" ? "100%" : `${node.height}px`;
      }

      /** padding */
      if ("paddingTop" in node && node.paddingTop) {
        info.style.paddingTop = `${node.paddingTop}px`;
      }
      if ("paddingBottom" in node && node.paddingBottom) {
        info.style.paddingBottom = `${node.paddingBottom}px`;
      }
      if ("paddingRight" in node && node.paddingRight) {
        info.style.paddingRight = `${node.paddingRight}px`;
      }
      if ("paddingLeft" in node && node.paddingLeft) {
        info.style.paddingLeft = `${node.paddingLeft}px`;
      }

      /** flex layout  */
      if ("layoutMode" in node) {
        info.style.display = "flex";
        info.style.flexDirection =
          node.layoutMode === "HORIZONTAL" ? "row" : "column";

        if ("itemSpacing" in node && node.itemSpacing) {
          info.style.gap = `${node.itemSpacing}px`;
        }

        if ("justiprimaryAxisAlignItemsfyContent" in node) {
          info.style.justifyContent = getJustifyContent(
            node.primaryAxisAlignItems
          );
        }

        if ("counterAxisAlignItems" in node) {
          info.style.alignItems = getAlignItems(node.counterAxisAlignItems);
        }

        if ("layoutWrap" in node) {
          info.style.flexWrap = node.layoutWrap === "WRAP" ? "wrap" : "nowrap";
        }
      }

      /** opacity  */
      if ("opacity" in node && node.opacity !== 1) {
        info.style.opacity = node.opacity;
      }

      /** border  */
      if ("bottomLeftRadius" in node && node.bottomLeftRadius) {
        info.style.borderBottomLeftRadius = `${node.bottomLeftRadius}px`;
      }
      if ("bottomRightRadius" in node && node.bottomRightRadius) {
        info.style.borderBottomRightRadius = `${node.bottomRightRadius}px`;
      }
      if ("topLeftRadius" in node && node.topLeftRadius) {
        info.style.borderTopRightRadius = `${node.topLeftRadius}px`;
      }
      if ("topRightRadius" in node && node.topRightRadius) {
        info.style.borderTopRightRadius = `${node.topRightRadius}px`;
      }
    });

  match(node)
    .with({ children: P.array() }, (node) => {
      info.children = node.children.map((child) => getLayerInfo(child));
    })
    .otherwise(() => {});

  return info;
}

function init() {
  figma.clientStorage.getAsync("mappingTable").then((data) =>
    figma.ui.postMessage({
      type: "getMappingTable",
      payload: data || defaultKeyValues,
    })
  );
}

figma.on("selectionchange", () => {
  const selection = figma.currentPage.selection;
  if (selection.length > 0) {
    const data = selection.map((node) => getLayerInfo(node));
    figma.ui.postMessage({ type: "selectionchange", payload: data });
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
