import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14 6 6 6m0 0-6 6m6-6H4.5"
    />
  </svg>
);
export default SvgArrow2Icon;
