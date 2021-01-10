import Image from "next/image";
import { Container, Header, ImageBox, HeaderContent, Texts } from "./styles";

export default function Section3() {
  return (
    <Container>
      <Header>
        <ImageBox>
          <Image
            className="img"
            src="https://images.pexels.com/photos/4473612/pexels-photo-4473612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            priority
          />
          <HeaderContent>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum.</p>
          </HeaderContent>
        </ImageBox>
      </Header>

      <Texts>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          repudiandae sunt delectus quod modi minus commodi. Magni sint sit iure
          sequi eaque dolorum. Cumque, sit.
        </p>
      </Texts>
      <Header>
        <ImageBox>
          <Image
            className="img"
            src="https://images.pexels.com/photos/3735494/pexels-photo-3735494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            priority
          />
          <HeaderContent>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis, voluptatem adipisci quisquam asperiores cupiditate.</p>
          </HeaderContent>
        </ImageBox>
      </Header>

      <Texts>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          repudiandae sunt delectus quod modi minus commodi. Magni sint sit iure
          sequi eaque dolorum. Cumque, sit.
        </p>
      </Texts>
    </Container>
  );
}
