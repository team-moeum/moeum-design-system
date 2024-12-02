import * as React from "react";
import type { SVGProps } from "react";
const SvgFileIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14 10-4 4"
    />
    <path
      stroke="#191B1C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m16 13 2-2a3.536 3.536 0 0 0 0-5v0a3.536 3.536 0 0 0-5 0l-2 2m-3 3-2 2a3.536 3.536 0 0 0 0 5v0a3.536 3.536 0 0 0 5 0l2-2"
    />
  </svg>
);
export default SvgFileIcon;
