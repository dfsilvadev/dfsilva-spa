import { useState } from "react";

import BurgerButton from "../burger-button";
import Flex from "../flex";
import Grid from "../grid";
import Menu from "../menu";

import "./styles.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar-bar">
        <Grid hasDivider={false} className="navbar__wrapper">
          <Flex
            align="center"
            justify="flex-end"
            style={{ width: "100%", height: "100%" }}
          >
            <BurgerButton isOpen={isMenuOpen} onToggle={handleMenuToggle} />
          </Flex>
        </Grid>
      </header>
      <Menu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  );
}
