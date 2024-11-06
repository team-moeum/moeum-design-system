import React from "react";

/** To-Do move to Icon Package */
export function isIcon(children: React.ReactNode): boolean {
  /* React element인지 확인 */
  if (!React.isValidElement(children)) {
    return false;
  }

  /* data-fotcamp-component 속성이 "Icon"인지 확인 */
  return children.props["data-fotcamp-component"] === "Icon";
}
