import { useState } from "react";
import { FAB } from "./FAB";
import { MenuList } from "./MenuList";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return showMenu ? (
    <MenuList onClose={() => setShowMenu(false)} />
  ) : (
    <FAB onClick={() => setShowMenu(true)} />
  );
};
