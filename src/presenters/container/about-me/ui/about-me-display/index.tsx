import { Trans, useTranslation } from "react-i18next";

import { Flex, Magnetic, Text } from "../../../../components/ui";

export default function AboutMeDisplay() {
  const { t } = useTranslation();

  return (
    <Flex gap="1.6rem" direction="column">
      <Text>
        {t("about.intro1")}{" "}
        <Magnetic>
          <span>
            <strong>
              <u>React.js</u>
            </strong>
          </span>
        </Magnetic>
        ,{" "}
        <Magnetic>
          <span>
            <strong>
              <u>Next.js</u>
            </strong>
          </span>
        </Magnetic>{" "}
        e{" "}
        <Magnetic>
          <span>
            <strong>
              <u>Node.js</u>
            </strong>
          </span>
        </Magnetic>
        .
      </Text>

      <Text>
        <Trans i18nKey="about.intro2" components={{ em: <em /> }} />
      </Text>

      <Text>
        <Trans i18nKey="about.intro3" components={{ em: <em /> }} />{" "}
        <Magnetic>
          <span>
            <strong>
              <u>Grupo Boticário</u>
            </strong>
          </span>
        </Magnetic>
        .
      </Text>

      <Text>{t("about.intro4")}</Text>
    </Flex>
  );
}
