import { AnchorHTMLAttributes, FC, useContext } from "react";

import { PointerContext } from "@/contexts/pointer";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link: FC<Props> = ({ children, ...props }) => {
  const { setHoveringLink } = useContext(PointerContext);

  return (
    <a
      {...props}
      onMouseEnter={() => setHoveringLink(true)}
      onMouseLeave={() => setHoveringLink(false)}
    >
      {children}
    </a>
  );
};

export default Link;
