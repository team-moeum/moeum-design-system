import * as React from "react";
import type { SVGProps } from "react";
const SvgCaratIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#191B1C"
      d="m12.4 16.467 5-6.667A.5.5 0 0 0 17 9H7a.5.5 0 0 0-.4.8l5 6.667a.5.5 0 0 0 .8 0"
    />
  </svg>
);
export default SvgCaratIcon;
