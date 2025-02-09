import { match, P } from "ts-pattern";

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
    .with({ type: "TEXT" }, (node) => {
      info.text = node.characters;
      info.fontSize = node.fontSize;
      info.fontName = node.fontName;
    })
    .with({ children: P.array() }, (node) => {
      info.children = node.children.map((child) => getLayerInfo(child));
    });

  return info;
}

figma.on("selectionchange", () => {
  const selection = figma.currentPage.selection;
  if (selection.length > 0) {
    const data = selection.map((node) => getLayerInfo(node));
    figma.ui.postMessage(data);
  }
});
