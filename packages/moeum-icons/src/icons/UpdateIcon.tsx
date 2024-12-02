import * as React from "react";
import type { SVGProps } from "react";
const SvgUpdateIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 1 4 4-4 4V5.75a6.25 6.25 0 0 0-5.414 9.375l-1.299.75A7.75 7.75 0 0 1 12 4.25zm5.414 7.876A6.25 6.25 0 0 1 12 18.25V15l-4 4 4 4v-3.25a7.75 7.75 0 0 0 6.713-11.626z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUpdateIcon;
