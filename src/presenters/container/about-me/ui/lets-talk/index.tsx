import { Chat } from "phosphor-react";

import { Grid, SplitBox, Text } from "../../../../components/ui";

import "./styles.scss";

export default function LetsTalk() {
  const email = "dfsilva.dxp@gmail.com";
  const subject = "Olá, vamos conversar?";
  const body = `
Olá,

Espero que esta mensagem o(a) encontre bem.
`;

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
              firstSplit={<Text textColor="default">Vamos Conversar?</Text>}
              lastSplit={<Text textColor="white">Ficarei feliz com isso!</Text>}
              icon={<Chat />}
              alignY="flex-end"
            />
          </a>
        </div>
      </Grid>
    </div>
  );
}
