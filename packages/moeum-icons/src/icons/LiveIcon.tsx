import * as React from "react";
import type { SVGProps } from "react";
const SvgLiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle
      cx={12.245}
      cy={12.301}
      r={2.663}
      stroke="#191B1C"
      strokeWidth={1.5}
    />
    <path
      stroke="#191B1C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.51 8.121a5.95 5.95 0 0 1 1.706 4.18 5.96 5.96 0 0 1-1.792 4.267M8.06 8.038A5.96 5.96 0 0 0 6.27 12.3c0 1.672.686 3.183 1.792 4.267M18.339 6.328a8.5 8.5 0 0 1 2.439 5.973 8.5 8.5 0 0 1-2.493 6.027m-12.134-12a8.5 8.5 0 0 0-2.44 5.973c0 2.353.953 4.484 2.493 6.027"
    />
  </svg>
);
export default SvgLiveIcon;
