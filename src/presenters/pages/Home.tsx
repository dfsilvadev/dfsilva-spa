import { Logo, Magnetic } from "../components/ui";

import "./Home.scss";

export function Home() {
  return (
    <div className="home">
      <Magnetic>
        <Logo size="md" />
      </Magnetic>
    </div>
  );
}
