import { useEffect, useState } from "react";

export default () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      setPosX(event.clientX);
      setPosY(event.clientY);
    });
  }, []);

  return { posX, posY, setPosX, setPosY };
};
