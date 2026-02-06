import { useTranslation } from "react-i18next";

import { SplitText, Status, Text } from "@/presenters/components/ui";
import GlitchText from "@/presenters/container/hero/components/glitch-text";

import "./styles.scss";

const START_YEAR = 2019;

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const yearLabel =
    currentYear > START_YEAR
      ? `${START_YEAR} - ${currentYear}`
      : `${START_YEAR}`;

  const name = t("footer.name");

  return (
    <footer className="app-footer">
      <div className="app-footer__content">
        <SplitText
          firstSplit={
            <GlitchText>
              <Text size="xsmall" textColor="gray" weight="semibold">
                &copy; {yearLabel}
              </Text>
            </GlitchText>
          }
          lastSplit={
            <GlitchText>
              <Text size="xsmall" textColor="gray" weight="semibold">
                &copy; {yearLabel}
              </Text>
            </GlitchText>
          }
        />

        <div className="app-footer__status">
          <Status />
          <SplitText
            firstSplit={
              <GlitchText>
                <Text size="small" textColor="gray" weight="semibold">
                  {name}
                </Text>
              </GlitchText>
            }
            lastSplit={
              <GlitchText>
                <Text size="small" textColor="gray" weight="semibold">
                  {name}
                </Text>
              </GlitchText>
            }
          />
        </div>
      </div>
    </footer>
  );
}
