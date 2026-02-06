import {
  Flex,
  Grid,
  GridColumn,
  SlideInUp,
  SocialMedia,
} from "../../components/ui";
import { Footer, HeroTitle, TechStack } from "./components";

import "./styles.scss";

/**
 * Hero section component
 * Main landing section with title, tech stack, and social media
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__divider">
        <Grid borderColor="black" />
      </div>

      <div className="hero__display">
        <Grid borderColor="black">
          <GridColumn className="hero__first-column">
            <Flex direction="column">
              <HeroTitle />

              <SlideInUp data-slidein="up" className="lessThan">
                <SocialMedia />
              </SlideInUp>
            </Flex>
          </GridColumn>

          <GridColumn className="hero__last-column">
            <TechStack />
          </GridColumn>
        </Grid>
      </div>

      <Footer />
    </section>
  );
}
