import { FC, HTMLAttributes } from "react";

import { pointerHoverableHOC } from "./Pointer";

interface Props extends HTMLAttributes<HTMLLIElement> {
  active?: boolean;
}

const NavItem: FC<Props> = ({ children, active = false, ...props }) => {
  return (
    <li
      className="group relative list-none text-2xl cursor-pointer w-fit transition-all"
      {...props}
    >
      <span className="opacity-0">{children}</span>
      {/* Line */}
      <div
        className={`absolute h-[2px] bg-red-500 top-1/2 transition-all ${
          active ? "w-[110%] left-0" : "w-0 group-hover:w-1 -left-2"
        }`}
      ></div>
      {/* Top part */}
      <span className="absolute w-max left-0 top-0 h-1/2 overflow-y-hidden bg-black pr-2 transition-all">
        {children}
      </span>
      {/* Bottom part */}
      <span
        className={`absolute w-max left-0 bottom-0 -z-[1] bg-black transition-all ${
          active ? "pl-1" : "pl-0"
        }`}
      >
        {children}
      </span>
    </li>
  );
};

export default pointerHoverableHOC(NavItem);
