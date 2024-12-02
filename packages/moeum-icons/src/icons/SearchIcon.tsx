import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.01 16.053a6.38 6.38 0 0 0 1.984-4.625c0-3.55-2.908-6.428-6.497-6.428S5 7.878 5 11.428s2.909 6.429 6.497 6.429a6.5 6.5 0 0 0 4.513-1.804m0 0L20 20"
    />
  </svg>
);
export default SvgSearchIcon;
