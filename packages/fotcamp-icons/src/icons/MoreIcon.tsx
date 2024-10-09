import * as React from "react";
import type { SVGProps } from "react";
const SvgMoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#191B1C"
      fillRule="evenodd"
      d="M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoreIcon;
