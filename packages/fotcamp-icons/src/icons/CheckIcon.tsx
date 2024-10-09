import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="m6 11.5 4.5 4.5 8-8"
    />
  </svg>
);
export default SvgCheckIcon;
