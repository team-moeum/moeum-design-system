import * as React from "react";
import type { SVGProps } from "react";
const SvgTerrorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#EF4444"
      fillRule="evenodd"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M7.293 16.707a1 1 0 0 1 0-1.414L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTerrorIcon;
