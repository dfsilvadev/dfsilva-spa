import { ArrowDown, EnvelopeSimple, MapPin, Phone } from "phosphor-react";

import {
  Flex,
  Grid,
  GridColumn,
  Logo,
  SectionDivider,
  SectionHeading,
  SplitBox,
  Text,
  TypingText,
} from "../../components/ui";

import "./styles.scss";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__header">
        <Grid>
          <GridColumn className="contact__first-column">
            <SectionHeading>
              <TypingText>Vamos conversar?</TypingText>
            </SectionHeading>
          </GridColumn>

          <GridColumn className="contact__last-column">
            <SectionHeading hasBorder={false}>
              <ArrowDown size={14} className="greaterThan" />

              <div className="contact__intro-text">
                <Text size="small" weight="semibold">
                  Sinta-se à vontade para entrar em contato.
                </Text>
                <Text size="small" weight="semibold">
                  Fico feliz em conversar para discutir ideias e trocar
                  experiências.
                </Text>
                <Text size="small" weight="semibold">
                  Se você tiver apenas dúvidas ou quiser dizer oi, tudo bem
                  também!
                </Text>
              </div>
            </SectionHeading>
          </GridColumn>
        </Grid>
      </div>

      <div className="contact__content">
        <Grid>
          <GridColumn className="contact__logo-column">
            <Flex
              align="center"
              justify="center"
              className="contact__logo-wrapper"
            >
              <Logo color="dark" size="lg" />
            </Flex>
          </GridColumn>

          <GridColumn className="contact__boxes-column">
            <div className="contact__boxes-grid">
              <SplitBox
                firstSplit={<Text>Telefone</Text>}
                lastSplit={<Text textColor="white">+55 11 9 5199-1612</Text>}
                icon={<Phone />}
                alignY="flex-end"
              />

              <SplitBox
                firstSplit={<Text>E-mail</Text>}
                lastSplit={<Text textColor="white">dfsilva.dxp@gmail.com</Text>}
                icon={<EnvelopeSimple />}
                alignY="flex-end"
              />

              <SplitBox
                firstSplit={<Text>Localidade</Text>}
                lastSplit={<Text textColor="white">Suzano, SP - Brasil</Text>}
                icon={<MapPin />}
                alignY="flex-end"
              />

              <SplitBox
                firstSplit={<Text>Daniel F. da Silva</Text>}
                lastSplit={
                  <Text textColor="white">Sênior Frontend Developer</Text>
                }
                icon={<Logo size="sm" color="dark" />}
                alignY="flex-end"
              />
            </div>
          </GridColumn>
        </Grid>
      </div>

      <SectionDivider />
    </section>
  );
}
