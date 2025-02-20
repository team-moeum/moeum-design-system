import { match, P } from "ts-pattern";
import { defaultKeyValues } from "./constants";

figma.showUI(__html__, { width: 400, height: 500 });

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
      info.fontSize = node.fontSize;
      info.fontName = node.fontName;
    })
    .otherwise(() => {});

  match(node)
    .with({ children: P.array() }, (node) => {
      info.children = node.children.map((child) => getLayerInfo(child));
    })
    .otherwise(() => {});

  return info;
}

function init() {
  figma.clientStorage
    .getAsync("mappingTable")
    .then((data) =>
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
