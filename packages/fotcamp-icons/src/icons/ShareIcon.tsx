import * as React from "react";
import type { SVGProps } from "react";
const SvgShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.358 4.136a.75.75 0 0 0-.862 0L8.315 6.31a.75.75 0 1 0 .846 1.239l2.016-1.378v7.294a.75.75 0 1 0 1.5 0V6.17l2.017 1.378a.75.75 0 0 0 .845-1.239zm-6.827 6.447a.03.03 0 0 0-.031.03v7.879c0 .017.014.03.03.03h12.792a.03.03 0 0 0 .03-.03v-7.879a.03.03 0 0 0-.03-.03h-2.808a.75.75 0 0 1 0-1.5h2.808c.845 0 1.53.685 1.53 1.53v7.879a1.53 1.53 0 0 1-1.53 1.53H5.53A1.53 1.53 0 0 1 4 18.492v-7.879c0-.845.685-1.53 1.53-1.53h2.808a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShareIcon;
