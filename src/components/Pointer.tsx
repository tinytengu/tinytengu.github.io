import { FC, HTMLAttributes, useContext } from "react";

import { useMouse } from "@/hooks";
import { PointerContext } from "@/contexts/pointer";

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  sizeHover?: number;
}

const Pointer: FC<Props> = ({ size, sizeHover, ...props }) => {
  const { posX, posY } = useMouse();
  const { hoveringLink } = useContext(PointerContext);

  return (
    <div
      className="fixed border-2 rounded-full hidden sm:flex justify-center items-center z-50 pointer-events-none transition-colors duration-500"
      style={{
        borderColor: hoveringLink ? "transparent" : "white",
        width: size,
        height: size,
        left: posX - size! / 2,
        top: posY - size! / 2,
      }}
      {...props}
    >
      <div
        className="absolute backdrop-invert rounded-full transition-all duration-500"
        style={{
          opacity: hoveringLink ? 1 : 0,
          width: hoveringLink ? sizeHover! : size!,
          height: hoveringLink ? sizeHover! : size!,
        }}
      ></div>
    </div>
  );
};

Pointer.defaultProps = {
  size: 40,
  sizeHover: 60,
};

export default Pointer;
