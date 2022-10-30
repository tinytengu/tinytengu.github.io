import { FC } from "react";

import NavItem from "./NavItem";

interface Props {
  items: string[];
  itemIdx?: number;
  onSelect?: (itemIdx: number) => void;
}

const Navbar: FC<Props> = ({ itemIdx, items, onSelect }) => {
  return (
    <ul className="md:flex flex-col gap-2">
      {items.map((item, idx) => (
        <NavItem
          active={itemIdx === idx}
          onClick={() => (onSelect ? onSelect(idx) : null)}
          key={item}
        >
          {item}
        </NavItem>
      ))}
    </ul>
  );
};

Navbar.defaultProps = {
  itemIdx: 0,
};

export default Navbar;
