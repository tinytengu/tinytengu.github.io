import { useState } from "react";

export default () => {
  const [hoveringLink, setHoveringLink] = useState(false);
  return { hoveringLink, setHoveringLink };
};
