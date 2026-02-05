import { Chat } from "phosphor-react";
import { useTranslation } from "react-i18next";

import { Grid, SplitBox, Text } from "../../../../components/ui";

import "./styles.scss";

export default function LetsTalk() {
  const { t } = useTranslation();
  const email = "dfsilva.dxp@gmail.com";
  const subject = t("about.emailSubject");
  const body = `${t("about.emailBodyGreeting")}\n\n${t("about.emailBodyHope")}`;

  return (
    <div className="about-me-lets-talk">
      <Grid>
        <span />
        <div>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`}
          >
            <SplitBox
              firstSplit={
                <Text textColor="default">{t("about.letsTalkTitle")}</Text>
              }
              lastSplit={
                <Text textColor="white">{t("about.letsTalkCta")}</Text>
              }
              icon={<Chat />}
              alignY="flex-end"
            />
          </a>
        </div>
      </Grid>
    </div>
  );
}
