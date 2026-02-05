import { NextIcon, NodeIcon, ReactIcon } from "../../assets/images/svg/icons";
import {
  Flex,
  Grid,
  GridColumn,
  Heading,
  SlideInUp,
  SocialMedia,
  SplitBox,
  Text,
} from "../../components/ui";
import "./styles.scss";
import { Footer } from "./ui";

const ICON_COLOR = "#fff";

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
              <SlideInUp data-slidein="up">
                <Flex>
                  <Heading size="huge" textColor="white" className="gradient">
                    Sênior
                  </Heading>
                </Flex>
              </SlideInUp>

              <SlideInUp data-slidein="up">
                <Flex>
                  <Heading size="huge" textColor="white">
                    Frontend
                  </Heading>
                </Flex>
              </SlideInUp>

              <SlideInUp data-slidein="up">
                <Flex>
                  <Heading size="huge" textColor="white">
                    Developer
                  </Heading>
                </Flex>
              </SlideInUp>

              <SlideInUp data-slidein="up" className="lessThan">
                <SocialMedia />
              </SlideInUp>
            </Flex>
          </GridColumn>

          <GridColumn className="hero__last-column">
            <SplitBox
              firstSplit={<Text textColor="white">React</Text>}
              lastSplit={<Text textColor="white">React</Text>}
              icon={<ReactIcon style={{ color: ICON_COLOR }} />}
              alignY="flex-end"
            />

            <span>
              <SplitBox
                firstSplit={<Text textColor="white">Next</Text>}
                lastSplit={<Text textColor="white">Next</Text>}
                icon={<NextIcon style={{ color: ICON_COLOR }} />}
                alignY="flex-end"
              />

              <SplitBox
                firstSplit={<Text textColor="white">Node</Text>}
                lastSplit={<Text textColor="white">Node</Text>}
                icon={<NodeIcon style={{ color: ICON_COLOR }} />}
                alignY="flex-end"
              />
            </span>
          </GridColumn>
        </Grid>
      </div>

      <Footer />
    </section>
  );
}
