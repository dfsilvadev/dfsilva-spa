import { motion } from "framer-motion";
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

// Constantes do efeito glitch (mesmas do loading-screen)
const GLITCH_TIMES = [0, 0.1, 0.12, 0.3, 0.32, 0.5, 0.52, 0.7, 0.85, 1];
const GLITCH_OPACITY = [1, 0.8, 1, 0.9, 1, 0.7, 1, 1, 0.85, 1];
const GLITCH_OPACITY_OFF = [0, 0.8, 0, 0.6, 0, 0.7, 0, 0, 0.5, 0];
const GLITCH_X_LEFT = [0, -3, 0, 2, 0, -2, 0, 0, 1, 0];
const GLITCH_X_RIGHT = [0, 3, 0, -2, 0, 2, 0, 0, -1, 0];

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
                  <div className="hero__glitch-wrap">
                    <motion.div
                      className="hero__glitch-text"
                      animate={{ opacity: GLITCH_OPACITY }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: GLITCH_TIMES,
                      }}
                    >
                      <Heading size="huge" textColor="white">
                        Frontend
                      </Heading>
                    </motion.div>

                    <motion.div
                      className="hero__glitch-text hero__glitch-text--cyan"
                      animate={{
                        x: GLITCH_X_LEFT,
                        opacity: GLITCH_OPACITY_OFF,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: GLITCH_TIMES,
                      }}
                    >
                      <Heading size="huge" textColor="white">
                        Frontend
                      </Heading>
                    </motion.div>

                    <motion.div
                      className="hero__glitch-text hero__glitch-text--red"
                      animate={{
                        x: GLITCH_X_RIGHT,
                        opacity: GLITCH_OPACITY_OFF,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: GLITCH_TIMES,
                      }}
                    >
                      <Heading size="huge" textColor="white">
                        Frontend
                      </Heading>
                    </motion.div>
                  </div>
                </Flex>
              </SlideInUp>

              <SlideInUp data-slidein="up">
                <Flex>
                  <div className="hero__glitch-wrap">
                    <motion.div
                      className="hero__glitch-text"
                      animate={{ opacity: GLITCH_OPACITY }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: GLITCH_TIMES,
                      }}
                    >
                      <Heading size="huge" textColor="white">
                        Developer
                      </Heading>
                    </motion.div>

                    <motion.div
                      className="hero__glitch-text hero__glitch-text--cyan"
                      animate={{
                        x: GLITCH_X_LEFT,
                        opacity: GLITCH_OPACITY_OFF,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: GLITCH_TIMES,
                      }}
                    >
                      <Heading size="huge" textColor="white">
                        Developer
                      </Heading>
                    </motion.div>

                    <motion.div
                      className="hero__glitch-text hero__glitch-text--red"
                      animate={{
                        x: GLITCH_X_RIGHT,
                        opacity: GLITCH_OPACITY_OFF,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: GLITCH_TIMES,
                      }}
                    >
                      <Heading size="huge" textColor="white">
                        Developer
                      </Heading>
                    </motion.div>
                  </div>
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
                  <div className="hero__glitch-wrap">
                    <motion.div
                      className="hero__glitch-text"
                      animate={{ opacity: GLITCH_OPACITY }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: GLITCH_TIMES,
                      }}
                    >
                      <Text textColor="white">React</Text>
                    </motion.div>

                    <motion.div
                      className="hero__glitch-text hero__glitch-text--cyan"
                      animate={{
                        x: GLITCH_X_LEFT,
                        opacity: GLITCH_OPACITY_OFF,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: GLITCH_TIMES,
                      }}
                    >
                      <Text textColor="white">React</Text>
                    </motion.div>

                    <motion.div
                      className="hero__glitch-text hero__glitch-text--red"
                      animate={{
                        x: GLITCH_X_RIGHT,
                        opacity: GLITCH_OPACITY_OFF,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: GLITCH_TIMES,
                      }}
                    >
                      <Text textColor="white">React</Text>
                    </motion.div>
                  </div>
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
                    <div className="hero__glitch-wrap">
                      <motion.div
                        className="hero__glitch-text"
                        animate={{ opacity: GLITCH_OPACITY }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          times: GLITCH_TIMES,
                        }}
                      >
                        <Text textColor="white">Next</Text>
                      </motion.div>

                      <motion.div
                        className="hero__glitch-text hero__glitch-text--cyan"
                        animate={{
                          x: GLITCH_X_LEFT,
                          opacity: GLITCH_OPACITY_OFF,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          times: GLITCH_TIMES,
                        }}
                      >
                        <Text textColor="white">Next</Text>
                      </motion.div>

                      <motion.div
                        className="hero__glitch-text hero__glitch-text--red"
                        animate={{
                          x: GLITCH_X_RIGHT,
                          opacity: GLITCH_OPACITY_OFF,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          times: GLITCH_TIMES,
                        }}
                      >
                        <Text textColor="white">Next</Text>
                      </motion.div>
                    </div>
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
                    <div className="hero__glitch-wrap">
                      <motion.div
                        className="hero__glitch-text"
                        animate={{ opacity: GLITCH_OPACITY }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          times: GLITCH_TIMES,
                        }}
                      >
                        <Text textColor="white">Node</Text>
                      </motion.div>

                      <motion.div
                        className="hero__glitch-text hero__glitch-text--cyan"
                        animate={{
                          x: GLITCH_X_LEFT,
                          opacity: GLITCH_OPACITY_OFF,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          times: GLITCH_TIMES,
                        }}
                      >
                        <Text textColor="white">Node</Text>
                      </motion.div>

                      <motion.div
                        className="hero__glitch-text hero__glitch-text--red"
                        animate={{
                          x: GLITCH_X_RIGHT,
                          opacity: GLITCH_OPACITY_OFF,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          times: GLITCH_TIMES,
                        }}
                      >
                        <Text textColor="white">Node</Text>
                      </motion.div>
                    </div>
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
