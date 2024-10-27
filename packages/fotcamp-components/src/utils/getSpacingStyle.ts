import { CSSProperties } from "react";

const SingleSpacing = {
  m: ["margin"],
  mt: ["marginTop"],
  mb: ["marginBottom"],
  ml: ["marginLeft"],
  mr: ["marginRight"],
  p: ["padding"],
  pt: ["paddingTop"],
  pb: ["paddingBottom"],
  pl: ["paddingLeft"],
  pr: ["paddingRight"],
} as const;

const AxisSpacing = {
  mx: ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"],
  px: ["paddingLeft", "paddingRight"],
  py: ["paddingTop", "paddingBottom"],
} as const;

const Spacing = {
  ...SingleSpacing,
  ...AxisSpacing
}

export type SpacingProps = Partial<Record<keyof typeof Spacing, string | number>>;

export const getSpacingStyle = (props: SpacingProps): CSSProperties => {
  const style: CSSProperties = {};

  (Object.entries(props) as [keyof SpacingProps, any][]).forEach(([key, value]) => {
    if (value === undefined) return;

    if (key in AxisSpacing) {
      const axisKey = key as keyof typeof AxisSpacing;
      const [prop1, prop2] = AxisSpacing[axisKey];
      style[prop1] = value;
      style[prop2] = value;
    }
    else if (key in SingleSpacing) {
      const singleKey = key as keyof typeof SingleSpacing;
      const [prop] = SingleSpacing[singleKey];
      style[prop] = value;
    }
  });

  return style;
};