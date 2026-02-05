import { SplitText, Status, Text } from "@/presenters/components/ui";

import "./styles.scss";

const START_YEAR = 2019;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const yearLabel =
    currentYear > START_YEAR
      ? `${START_YEAR} - ${currentYear}`
      : `${START_YEAR}`;

  return (
    <footer className="app-footer">
      <div className="app-footer__content">
        <SplitText
          firstSplit={
            <Text size="xsmall" textColor="gray" weight="semibold">
              &copy; {yearLabel}
            </Text>
          }
          lastSplit={
            <Text size="xsmall" textColor="gray" weight="semibold">
              &copy; {yearLabel}
            </Text>
          }
        />

        <div className="app-footer__status">
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
        </div>
      </div>
    </footer>
  );
}
