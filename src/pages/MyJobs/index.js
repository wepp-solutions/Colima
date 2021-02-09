import React from "react";
import Image from "next/image";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

import {
  Container,
  Wrapper,
  ImageBox,
  Header,
} from "../../../styles/Jobs/styles";

const MyJobs = () => {
  return (
    <>
      <Header>
        <h1>Meus trabalhos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          incidunt quod recusandae voluptatum assumenda eaque ullam
          reprehenderit nulla praesentium eum!
        </p>

        <div>
          <AiFillFacebook size={30} />
          <AiFillInstagram size={30} />
          <AiFillLinkedin size={30} />
          <AiFillTwitterCircle size={30} />
        </div>
      </Header>
      <Container>
        <Wrapper>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageBox>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/2027058/pexels-photo-2027058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageBox>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/4427620/pexels-photo-4427620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageBox>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageBox>
        </Wrapper>
      </Container>

      <Container>
        <Wrapper>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/3149899/pexels-photo-3149899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageBox>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageBox>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/2648203/pexels-photo-2648203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageBox>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/2647744/pexels-photo-2647744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </ImageBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default MyJobs;
