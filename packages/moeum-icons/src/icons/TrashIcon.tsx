import * as React from "react";
import type { SVGProps } from "react";
const SvgTrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#A6ABAF"
      fillRule="evenodd"
      d="M19 7.333H5v2.333c.29 0 .434 0 .554.024.494.098.88.484.978.978.024.12.024.265.024.554v4.044c0 1.76 0 2.64.546 3.187C7.65 19 8.53 19 10.29 19h3.422c1.76 0 2.64 0 3.187-.547s.546-1.427.546-3.187v-4.044c0-.29 0-.434.024-.554.099-.494.485-.88.978-.978.12-.024.265-.024.554-.024zm-8.322 3.889a.622.622 0 0 0-1.245 0v3.889a.622.622 0 1 0 1.245 0zm3.889 0a.622.622 0 0 0-1.245 0v3.889a.622.622 0 1 0 1.245 0z"
      clipRule="evenodd"
    />
    <path
      stroke="#A6ABAF"
      strokeLinecap="round"
      strokeWidth={1.244}
      d="M10.205 5.288c.088-.082.284-.156.555-.208s.605-.08.947-.08c.343 0 .675.028.947.08s.467.126.556.208"
    />
  </svg>
);
export default SvgTrashIcon;
