import Image from "next/image";
import { Container, Card, ContainerCards } from "./styles";

export default function Section4() {
  return (
    <Container>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem!</p>
      <ContainerCards>
      <Card>
        <Image
          src="https://images.pexels.com/photos/4057733/pexels-photo-4057733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          layout="fill"
          priority
          className="img"
          objectPosition="center"
          objectFit="cover"
        />
      </Card>
      <Card>
        <Image
          src="https://images.pexels.com/photos/4057731/pexels-photo-4057731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          layout="fill"
          priority
          className="img"
          objectPosition="center"
          objectFit="cover"
        />
      </Card>
      <Card>
        <Image
          src="https://images.pexels.com/photos/4057732/pexels-photo-4057732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          layout="fill"
          priority
          className="img"
          objectPosition="center"
          objectFit="cover"
        />
      </Card>
      </ContainerCards>
    </Container>
  );
}
