import { GlitchText } from ".";
import { SlideInUp, SplitBox, Text } from "../../../components/ui";

import { ICON_COLOR, TECH_STACK, type TechItem } from "../constants";

type TechItemComponentProps = {
  tech: TechItem;
};

const TechItemComponent = ({ tech }: TechItemComponentProps) => {
  const { name, Icon } = tech;

  return (
    <SplitBox
      firstSplit={
        <SlideInUp data-slidein="up">
          <GlitchText>
            <Text textColor="white">{name}</Text>
          </GlitchText>
        </SlideInUp>
      }
      lastSplit={<Text textColor="white">{name}</Text>}
      icon={
        <SlideInUp data-slidein="up">
          <Icon style={{ color: ICON_COLOR }} />
        </SlideInUp>
      }
      alignY="flex-end"
    />
  );
};

/**
 * Tech stack section component
 * Displays technology names with glitch effect and their icons
 */
const TechStack = () => {
  const [firstTech, ...remainingTechs] = TECH_STACK;

  return (
    <>
      <TechItemComponent tech={firstTech} />

      <span>
        {remainingTechs.map((tech) => (
          <TechItemComponent key={tech.name} tech={tech} />
        ))}
      </span>
    </>
  );
};

export default TechStack;
