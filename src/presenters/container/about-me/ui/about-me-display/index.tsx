import { Flex, Magnetic, Text } from "../../../../components/ui";

export default function AboutMeDisplay() {
  return (
    <Flex gap="1.6rem" direction="column">
      <Text>
        Olá, meu nome é Daniel Silva e moro em Suzano - SP. Meu trabalho é criar
        experiências interativas únicas usando tecnologia web, e hoje atuo
        principalmente com{" "}
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
        Minha paixão por desenvolver vai além do código; também adoro a etapa de{" "}
        <em>UX Design</em> e gosto de participar de um projeto desde a{" "}
        <em>idealização da arquitetura</em> até a <em>implementação</em> e os{" "}
        <em>testes</em>.
      </Text>

      <Text>
        <em>"Desenvolver tornou-se um hobby favorito"</em> e atualmente pratico
        esse hobby no{" "}
        <Magnetic>
          <span>
            <strong>
              <u>Grupo Boticário</u>
            </strong>
          </span>
        </Magnetic>
        .
      </Text>

      <Text>
        Obrigado por ler um pouco sobre mim. Fico feliz em conversar e trocar
        experiências sobre desenvolvimento e tecnologia.
      </Text>
    </Flex>
  );
}
