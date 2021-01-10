import Image from "next/image";
import { Container, ImageWrapper, ContentWrapper } from "./styles";

export default function Section1() {
  return (
    <Container>
      <ImageWrapper>
        <Image
          className="img"
          priority
          src="https://images.pexels.com/photos/3758056/pexels-photo-3758056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          layout="fill"
        />
      </ImageWrapper>

      <ContentWrapper>
        <p>Cuide do seu corpo, mente e alma.</p>
        <p>
          Inscreva-se para fazer uma aula gratuita e conheça a nossa academia e
          os cursos que oferecemos.
        </p>
        <p>Reserve uma aula</p>
      </ContentWrapper>
    </Container>
  );
}
