export const Spacing = {
  m: "margin",
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  // mx: "marginX",
  // my: "marginY",
  p: "padding",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  // px: "paddingX",
  // py: "paddingY",
} as const;

export type SpacingValue = (typeof Spacing)[keyof typeof Spacing];

export const getSpacingStyle = (
  props: Partial<Record<keyof typeof Spacing, SpacingValue>>
): CSSProperties => {
  const style: CSSProperties = {};

  Object.entries(props).forEach(([key, value]) => {
    if (value === undefined) return;

    if (key === "mx") {
      style.marginLeft = value;
      style.marginRight = value;
    } else if (key === "my") {
      style.marginTop = value;
      style.marginBottom = value;
    } else if (key === "px") {
      style.paddingLeft = value;
      style.paddingRight = value;
    } else if (key === "py") {
      style.paddingTop = value;
      style.paddingBottom = value;
    } else {
      const cssProperty = Spacing[key as keyof typeof Spacing];
      style[cssProperty as keyof CSSProperties] = value;
    }
  });

  return style;
};
