import { ComponentType, useContext } from "react";

import { PointerContext } from "@/contexts/pointer";

export const pointerHoverableHOC = (Component: ComponentType) => {
  return (props: any) => {
    const { setHoveringLink } = useContext(PointerContext);

    return (
      <Component
        {...props}
        onMouseEnter={() => setHoveringLink(true)}
        onMouseLeave={() => setHoveringLink(false)}
      />
    );
  };
};
