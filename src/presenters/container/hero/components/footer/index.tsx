import { ArrowDown } from "phosphor-react";
import {
  Flex,
  Grid,
  GridColumn,
  SlideInUp,
  SocialMedia,
  SplitText,
  Status,
  Text,
} from "../../../../components/ui";

import GlitchText from "../glitch-text";

import "./styles.scss";

const FOOTER_CONTENT = {
  learnMore: "Saiba mais",
  author: "Daniel F. da Silva",
} as const;

/**
 * Hero footer component
 * Displays "Learn more" link and author info with social media
 */
export default function Footer() {
  return (
    <div className="hero-footer">
      <Grid borderColor="black">
        <GridColumn className="hero-footer__first-column">
          <SlideInUp data-slidein="up">
            <Flex align="center" gap="0.8rem">
              <ArrowDown />
              <SplitText
                firstSplit={
                  <GlitchText>
                    <Text size="small" textColor="gray" weight="semibold">
                      {FOOTER_CONTENT.learnMore}
                    </Text>
                  </GlitchText>
                }
                lastSplit={
                  <GlitchText>
                    <Text size="small" textColor="gray" weight="semibold">
                      {FOOTER_CONTENT.learnMore}
                    </Text>
                  </GlitchText>
                }
              />
            </Flex>
          </SlideInUp>
        </GridColumn>

        <GridColumn className="hero-footer__last-column greaterThan">
          <SlideInUp data-slidein="up" className="greaterThan">
            <SocialMedia />
          </SlideInUp>

          <SlideInUp data-slidein="up" className="greaterThan">
            <Flex align="center" gap="0.8rem">
              <Status />
              <SplitText
                firstSplit={
                  <GlitchText>
                    <Text size="small" textColor="gray" weight="semibold">
                      {FOOTER_CONTENT.author}
                    </Text>
                  </GlitchText>
                }
                lastSplit={
                  <GlitchText>
                    <Text size="small" textColor="gray" weight="semibold">
                      {FOOTER_CONTENT.author}
                    </Text>
                  </GlitchText>
                }
              />
            </Flex>
          </SlideInUp>
        </GridColumn>
      </Grid>
    </div>
  );
}
