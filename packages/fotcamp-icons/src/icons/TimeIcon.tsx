import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 12a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0M12 3.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M12.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .3.6l4 3a.75.75 0 1 0 .9-1.2l-3.7-2.775z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTimeIcon;
