import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { Container, ImageBox } from "../../../styles/Initial/styles";

export default function Initial() {
  return (
    <Container>
      <ImageBox>
        <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="img"
        />
      </ImageBox>
      <div>
        <h1>Olá, eu sou Felipe Oliveira</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          adipisci, libero unde enim soluta optio sint aut. Necessitatibus.
        </p>
        <Link href="/MyJobs">
            <button>Ver meu Trabalho</button>
        </Link>
      </div>
    </Container>
  );
}
