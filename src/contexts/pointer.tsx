import { createContext } from "react";

export interface PointerContextProps {
  hoveringLink: boolean;
  setHoveringLink: (value: boolean) => void;
}

export const PointerContext = createContext<PointerContextProps>({
  hoveringLink: false,
  setHoveringLink: () => {},
});
