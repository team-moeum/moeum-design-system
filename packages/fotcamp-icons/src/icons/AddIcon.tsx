import * as React from "react";
import type { SVGProps } from "react";
const SvgAddIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 4a.75.75 0 0 0-1.5 0v7.25H4a.75.75 0 0 0 0 1.5h7.25V20a.75.75 0 0 0 1.5 0v-7.25H20a.75.75 0 0 0 0-1.5h-7.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAddIcon;
