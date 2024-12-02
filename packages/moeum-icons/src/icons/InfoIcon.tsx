import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 12a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0M12 3.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M12.873 16V9.637h-1.734V16zm-1.342-7.312a1 1 0 0 0 .475.117.931.931 0 0 0 .809-.44.821.821 0 0 0 0-.885.87.87 0 0 0-.34-.322.93.93 0 0 0-.47-.123.95.95 0 0 0-.474.123.9.9 0 0 0-.346.322.82.82 0 0 0 0 .885 1 1 0 0 0 .346.322"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfoIcon;
