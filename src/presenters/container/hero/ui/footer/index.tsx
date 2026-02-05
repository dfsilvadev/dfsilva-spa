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

export default function Footer() {
  return (
    <div className="hero-footer">
      <Grid borderColor="black">
        <GridColumn className="hero-footer__first-column">
          <SlideInUp data-slidein="up">
            <Flex align="center" gap="0.8rem">
              <ArrowDown size={20} />
              <SplitText
                firstSplit={
                  <Text size="small" textColor="gray" weight="semibold">
                    Saiba mais
                  </Text>
                }
                lastSplit={
                  <Text size="small" textColor="gray" weight="semibold">
                    Saiba mais
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
                    Daniel F. da Silva
                  </Text>
                }
                lastSplit={
                  <Text size="small" textColor="gray" weight="semibold">
                    Daniel F. da Silva
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
