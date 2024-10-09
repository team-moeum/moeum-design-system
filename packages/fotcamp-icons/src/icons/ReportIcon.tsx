import * as React from "react";
import type { SVGProps } from "react";
const SvgReportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={12} height={1.68} x={6} y={17.32} fill="#F87171" rx={0.56} />
    <path
      fill="#F87171"
      fillRule="evenodd"
      d="M6 10a6 6 0 1 1 12 0v5.44c0 .31-.25.56-.56.56H6.56a.56.56 0 0 1-.56-.56zm5.169 1L11 6h2l-.169 5zM12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReportIcon;
