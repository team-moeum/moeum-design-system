import * as React from "react";
import type { SVGProps } from "react";
const SvgFinterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12 9a3 3 0 1 1-6 0m6 0a3 3 0 1 0-6 0m6 0h9M6 9H3M12 16a3 3 0 1 0 6 0m-6 0a3 3 0 1 1 6 0m-6 0H3m15 0h3"
    />
  </svg>
);
export default SvgFinterIcon;
