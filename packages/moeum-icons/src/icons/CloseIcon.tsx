import * as React from "react";
import type { SVGProps } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.874 5.813a.75.75 0 1 0-1.06 1.06L10.94 12l-5.127 5.127a.75.75 0 0 0 1.06 1.06L12 13.061l5.127 5.126a.75.75 0 1 0 1.06-1.06L13.061 12l5.127-5.127a.75.75 0 0 0-1.061-1.06L12 10.939z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseIcon;
