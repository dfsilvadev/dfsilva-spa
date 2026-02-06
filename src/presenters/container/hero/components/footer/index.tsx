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
                  <Text size="small" textColor="gray" weight="semibold">
                    {FOOTER_CONTENT.learnMore}
                  </Text>
                }
                lastSplit={
                  <Text size="small" textColor="gray" weight="semibold">
                    {FOOTER_CONTENT.learnMore}
                  </Text>
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
                  <Text size="small" textColor="gray" weight="semibold">
                    {FOOTER_CONTENT.author}
                  </Text>
                }
                lastSplit={
                  <Text size="small" textColor="gray" weight="semibold">
                    {FOOTER_CONTENT.author}
                  </Text>
                }
              />
            </Flex>
          </SlideInUp>
        </GridColumn>
      </Grid>
    </div>
  );
}
