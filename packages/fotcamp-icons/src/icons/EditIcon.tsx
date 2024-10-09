import * as React from "react";
import type { SVGProps } from "react";
const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#50BF50"
      fillRule="evenodd"
      d="m13.025 7.31 2.205-2.205C15.967 4.368 16.336 4 16.794 4s.826.368 1.563 1.105l.541.541c.737.737 1.106 1.106 1.106 1.564s-.369.826-1.106 1.563l-2.185 2.185a10.36 10.36 0 0 1-3.688-3.648m-.804.804-6.876 6.874c-.235.235-.353.353-.43.497s-.11.307-.175.633l-.705 3.522c-.036.183-.055.275-.003.328.053.052.145.034.328-.003l3.523-.704c.326-.066.489-.098.633-.175.144-.078.262-.195.497-.43l6.894-6.893a11.5 11.5 0 0 1-3.686-3.65"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEditIcon;
