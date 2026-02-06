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
import { Footer } from "./ui";

import { NextIcon, NodeIcon, ReactIcon } from "../../assets/images/svg/icons";

import "./styles.scss";

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
              firstSplit={
                <SlideInUp data-slidein="up">
                  <Text textColor="white">React</Text>
                </SlideInUp>
              }
              lastSplit={<Text textColor="white">React</Text>}
              icon={
                <SlideInUp data-slidein="up">
                  <ReactIcon style={{ color: ICON_COLOR }} />
                </SlideInUp>
              }
              alignY="flex-end"
            />

            <span>
              <SplitBox
                firstSplit={
                  <SlideInUp data-slidein="up">
                    <Text textColor="white">Next</Text>
                  </SlideInUp>
                }
                lastSplit={<Text textColor="white">Next</Text>}
                icon={
                  <SlideInUp data-slidein="up">
                    <NextIcon style={{ color: ICON_COLOR }} />
                  </SlideInUp>
                }
                alignY="flex-end"
              />

              <SplitBox
                firstSplit={
                  <SlideInUp data-slidein="up">
                    <Text textColor="white">Node</Text>
                  </SlideInUp>
                }
                lastSplit={<Text textColor="white">Node</Text>}
                icon={
                  <SlideInUp data-slidein="up">
                    <NodeIcon style={{ color: ICON_COLOR }} />
                  </SlideInUp>
                }
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
