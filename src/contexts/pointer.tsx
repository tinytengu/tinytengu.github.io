import { createContext, FC, PropsWithChildren } from "react";

import { usePointer } from "@/hooks";

export interface PointerContextProps {
  hoveringLink: boolean;
  setHoveringLink: (value: boolean) => void;
}

export const PointerContext = createContext<PointerContextProps>({
  hoveringLink: false,
  setHoveringLink: () => {},
});

export const PointerContextProvider: FC<PropsWithChildren> = (props) => {
  return <PointerContext.Provider value={usePointer()} {...props} />;
};
