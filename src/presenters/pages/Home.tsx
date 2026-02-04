import { House } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Avatar } from "../components/ui";
import "./Home.scss";

export function Home() {
  const { t } = useTranslation();
  return (
    <div className="home">
      <Avatar />
      <House
        size={48}
        weight="duotone"
        className="home__icon"
        data-content="view-all"
      />
      <h1 className="home__title">{t("welcome")}</h1>
      <p className="home__text">{t("home")}</p>
      <a href="http://localhost:3001">Link</a>
    </div>
  );
}
