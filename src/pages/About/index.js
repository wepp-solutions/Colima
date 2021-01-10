import Image from "next/image";
import {
  Container,
  ContentSecundaryWrapper,
  FirstWrapper,
  SecundaryWrapper,
  ImageBox,
} from "../../../styles/About/styles";
import Footer from "../../components/Footer/index";
import NavBar from "../../components/NavBar/index";

export default function About() {
  return (
    <>
      <Container>
        <NavBar />
        <FirstWrapper>
          <ImageBox first>
            <Image
              src="https://images.pexels.com/photos/3286006/pexels-photo-3286006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              priority
              objectFit="cover"
              objectPosition="center"
            />
          </ImageBox>

          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
              dolores! Officia.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              soluta fuga repellendus alias reiciendis obcaecati est aspernatur
              ipsum fugiat repellat.
            </p>
          </div>
        </FirstWrapper>

        <SecundaryWrapper>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/4498193/pexels-photo-4498193.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              layout="fill"
              priority
              className="img"
              objectPosition="center"
              objectFit="cover"
            />

            <ContentSecundaryWrapper>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                reiciendis accusantium assumenda.
              </p>
            </ContentSecundaryWrapper>
          </ImageBox>
        </SecundaryWrapper>
      </Container>
      <Footer />
    </>
  );
}
