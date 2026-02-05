import Photo from "@/presenters/assets/images/hero/hero.webp";

import "./styles.scss";

const Avatar = () => {
  return (
    <div
      className="avatar-wrapper"
      role="figure"
      aria-label="Foto de Daniel Silva"
    >
      <div className="avatar-picture">
        <img
          src={Photo}
          alt="Foto de Daniel Silva"
          width={100}
          height={139}
          className="avatar-img"
        />
      </div>
    </div>
  );
};

export default Avatar;
