import Flex from "../flex";
import Grid from "../grid";
import BurgerButton from "../burger-button";
import "./styles.scss";

export default function Navbar() {
  return (
    <header className="navbar-bar">
      <Grid hasDivider={false} className="navbar__wrapper">
        <Flex
          align="center"
          justify="flex-end"
          style={{ width: "100%", height: "100%" }}
        >
          <BurgerButton />
        </Flex>
      </Grid>
    </header>
  );
}
