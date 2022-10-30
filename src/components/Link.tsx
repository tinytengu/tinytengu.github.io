import { FC, AnchorHTMLAttributes } from "react";

import { pointerHoverableHOC } from "./Pointer";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link: FC<Props> = (props) => {
  return <a {...props} />;
};

export default pointerHoverableHOC(Link);
