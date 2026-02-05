import { ArrowDown } from "phosphor-react";

import {
  Avatar,
  Flex,
  Grid,
  GridColumn,
  Heading,
  SectionDivider,
  SectionHeading,
  Status,
  Text,
  TextReveal,
  TypingText,
} from "../../components/ui";

import { AboutMeDisplay, LetsTalk, Technologies } from "./ui";

import "./styles.scss";

export default function AboutMe() {
  return (
    <section className="about-me">
      <SectionDivider />

      <Grid>
        <GridColumn className="about-me__first-column">
          <SectionHeading>
            <TypingText>Sobre mim</TypingText>
          </SectionHeading>

          <div className="about-me__first-column-body">
            <Flex gap="1.6rem" align="center">
              <Avatar />

              <Flex gap="0.8rem" direction="column">
                <TextReveal>
                  <Heading
                    as="h1"
                    size="large"
                    className="reveal"
                    data-animation="trigger"
                  >
                    Daniel F. Silva
                  </Heading>
                </TextReveal>

                <Flex gap="1rem" align="center" justify="center">
                  <Status />

                  <Text size="xsmall" weight="semibold" textColor="gray">
                    <TypingText>De Suzano, SP - BR</TypingText>
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <AboutMeDisplay />
          </div>
        </GridColumn>

        <GridColumn className="about-me__last-column">
          <SectionHeading hasBorder={false}>
            <ArrowDown />
            <TypingText>Algumas tecnologias com as quais tabalhei</TypingText>
          </SectionHeading>

          <Technologies />
        </GridColumn>
      </Grid>

      <LetsTalk />
      <SectionDivider />
    </section>
  );
}
