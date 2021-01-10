import Image from "next/image";
import { Container, ContentWrapper, Title, TitleCard, CardsFlex, CardsWrapper } from "./styles";

export default function Section2() {
  return (
    <Container>
      <ContentWrapper>
        <Title>Próximas aulas</Title>
        <CardsFlex>
        <CardsWrapper>
          <Image
            src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            priority
            className="img"
            objectFit="cover"
            objectPosition="center"
          />
          <TitleCard>Ioga Aeróbica</TitleCard>
        </CardsWrapper>
        <CardsWrapper>
          <Image
            src="https://images.pexels.com/photos/3822727/pexels-photo-3822727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            priority
            className="img"
            objectFit="cover"
            objectPosition="center"
          />
          <TitleCard>Treinamento para instrutores</TitleCard>
        </CardsWrapper>
        </CardsFlex>
        
        <p>Além da programação normal, também recebemos professores visitantes e palestrantes.</p>
        <button>Veja Mais</button>
      </ContentWrapper>
    </Container>
  );
}
