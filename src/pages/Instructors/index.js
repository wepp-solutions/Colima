import Image from "next/image";
import {
  Container,
  CardsWrapper,
  ImageBox,
} from "../../../styles/Instructors/styles";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer/index";

export default function Instructors() {
  return (
    <>
      <Container>
      <NavBar />

      <CardsWrapper>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/5255556/pexels-photo-5255556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            priority
            className="img"
            objectFit="cover"
          />
        </ImageBox>
        <div>
          <p>Amanda Oliveira</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            dolor, eius odio rerum quae eveniet minima neque reiciendis placeat
            repellendus earum mollitia id explicabo corrupti, distinctio ab
            incidunt ad recusandae? Explicabo voluptatibus distinctio alias rem.
          </p>
        </div>
      </CardsWrapper>

      <CardsWrapper>
        <div>
          <p>Flávio Santos</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            dolor, eius odio rerum quae eveniet minima neque reiciendis placeat
            repellendus earum mollitia id explicabo corrupti, distinctio ab
            incidunt ad recusandae? Explicabo voluptatibus distinctio alias rem.
          </p>
        </div>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            priority
            className="img"
            objectFit="cover"
          />
        </ImageBox>
      </CardsWrapper>

      <CardsWrapper>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            priority
            className="img"
            objectFit="cover"
          />
        </ImageBox>
        <div>
          <p>Paula Medeiros</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            dolor, eius odio rerum quae eveniet minima neque reiciendis placeat
            repellendus earum mollitia id explicabo corrupti, distinctio ab
            incidunt ad recusandae? Explicabo voluptatibus distinctio alias rem.
          </p>
        </div>
      </CardsWrapper>

      <CardsWrapper>
        <div>
          <p>Jorge Silva</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            dolor, eius odio rerum quae eveniet minima neque reiciendis placeat
            repellendus earum mollitia id explicabo corrupti, distinctio ab
            incidunt ad recusandae? Explicabo voluptatibus distinctio alias rem.
          </p>
        </div>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            priority
            className="img"
            objectFit="cover"
          />
        </ImageBox>
      </CardsWrapper>
    </Container>

    <Footer />
    </>
  );
}
