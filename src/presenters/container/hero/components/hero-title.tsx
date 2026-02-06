import { Flex, Heading, SlideInUp } from "../../../components/ui";

import { GlitchText } from ".";

import { HERO_TITLES } from "../constants";

/**
 * Hero title section component
 * Displays "Sênior", "Frontend", and "Developer" titles
 */
const HeroTitle = () => {
  return (
    <Flex direction="column">
      <SlideInUp data-slidein="up">
        <Flex>
          <Heading as="h1" size="huge" textColor="white" className="gradient">
            {HERO_TITLES.senior}
          </Heading>
        </Flex>
      </SlideInUp>

      <SlideInUp data-slidein="up">
        <Flex>
          <GlitchText>
            <Heading as="h2" size="huge" textColor="white">
              {HERO_TITLES.frontend}
            </Heading>
          </GlitchText>
        </Flex>
      </SlideInUp>

      <SlideInUp data-slidein="up">
        <Flex>
          <GlitchText>
            <Heading as="h2" size="huge" textColor="white">
              {HERO_TITLES.developer}
            </Heading>
          </GlitchText>
        </Flex>
      </SlideInUp>
    </Flex>
  );
};

export default HeroTitle;
