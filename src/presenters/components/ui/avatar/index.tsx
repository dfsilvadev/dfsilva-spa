import { useTranslation } from "react-i18next";

import Photo from "@/presenters/assets/images/hero/hero.webp";

import "./styles.scss";

const Avatar = () => {
  const { t } = useTranslation();
  const alt = t("a11y.photoAlt");

  return (
    <div className="avatar-wrapper" role="figure" aria-label={alt}>
      <div className="avatar-picture">
        <img
          src={Photo}
          alt={alt}
          width={100}
          height={139}
          decoding="async"
          className="avatar-img"
        />
      </div>
    </div>
  );
};

export default Avatar;
