import { CSSProperties } from "react";

type SpacingKey =
  | "m"
  | "mx"
  | "my"
  | "mt"
  | "mb"
  | "ml"
  | "mr"
  | "p"
  | "px"
  | "py"
  | "pt"
  | "pb"
  | "pl"
  | "pr";

type CSSSpacingProperty =
  | "margin"
  | "marginTop"
  | "marginBottom"
  | "marginLeft"
  | "marginRight"
  | "padding"
  | "paddingTop"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight";

const SpacingMap: Record<SpacingKey, Array<CSSSpacingProperty>> = {
  m: ["margin"],
  mx: ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"],
  mt: ["marginTop"],
  mb: ["marginBottom"],
  ml: ["marginLeft"],
  mr: ["marginRight"],
  p: ["padding"],
  px: ["paddingLeft", "paddingRight"],
  py: ["paddingTop", "paddingBottom"],
  pt: ["paddingTop"],
  pb: ["paddingBottom"],
  pl: ["paddingLeft"],
  pr: ["paddingRight"]
};

export type SpacingProps = Partial<Record<SpacingKey, CSSProperties[CSSSpacingProperty]>>;

export const getSpacingStyle = (props: SpacingProps): CSSProperties => {
  const style: CSSProperties = {};

  Object.entries(props).forEach(([key, value]) => {
    if (value === undefined) return;

    const properties = SpacingMap[key as SpacingKey];
    properties.forEach(property => {
      style[property] = value;
    });
  });

  return style;
};
