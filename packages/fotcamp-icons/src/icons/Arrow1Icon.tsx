import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#191B1C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 6 6 6-6 6"
    />
  </svg>
);
export default SvgArrow1Icon;
