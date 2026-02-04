import { House } from "phosphor-react";

import { Avatar, Heading, Logo } from "../components/ui";

import "./Home.scss";

export function Home() {
  return (
    <div className="home">
      <Avatar />
      <Logo />
      <House
        size={48}
        weight="duotone"
        className="home__icon"
        data-content="view-all"
      />
      <Heading>Título</Heading>
      <Heading as="h2" size="regular" textColor="white">
        Hero
      </Heading>
      <Heading size="large" weight="regular">
        Subtítulo
      </Heading>
      <a href="http://localhost:3001">Link</a>
    </div>
  );
}
