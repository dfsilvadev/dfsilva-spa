import { ArrowDown, EnvelopeSimple, MapPin, Phone } from "phosphor-react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <Grid>
          <GridColumn className="contact__first-column">
            <SectionHeading>
              <TypingText>{t("contact.title")}</TypingText>
            </SectionHeading>
          </GridColumn>

          <GridColumn className="contact__last-column">
            <SectionHeading hasBorder={false}>
              <ArrowDown size={14} className="greaterThan" />

              <div className="contact__intro-text">
                <Text size="small" weight="semibold">
                  {t("contact.intro1")}
                </Text>
                <Text size="small" weight="semibold">
                  {t("contact.intro2")}
                </Text>
                <Text size="small" weight="semibold">
                  {t("contact.intro3")}
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
                firstSplit={<Text>{t("contact.phone")}</Text>}
                lastSplit={<Text textColor="white">+55 11 9 5199-1612</Text>}
                icon={<Phone />}
                alignY="flex-end"
              />

              <SplitBox
                firstSplit={<Text>{t("contact.email")}</Text>}
                lastSplit={<Text textColor="white">dfsilva.dxp@gmail.com</Text>}
                icon={<EnvelopeSimple />}
                alignY="flex-end"
              />

              <SplitBox
                firstSplit={<Text>{t("contact.location")}</Text>}
                lastSplit={
                  <Text textColor="white">{t("contact.locationValue")}</Text>
                }
                icon={<MapPin />}
                alignY="flex-end"
              />

              <SplitBox
                firstSplit={<Text>{t("contact.name")}</Text>}
                lastSplit={<Text textColor="white">{t("contact.role")}</Text>}
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
