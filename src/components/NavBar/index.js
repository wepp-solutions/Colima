import Link from 'next/link'
import { useState } from 'react'
import { Container, NavBarLinks, IconMenu, SideBar } from "./styles";

export default function NavBar() {
  const [isActiveSideBar, setActiveSideBar] = useState(false)

  const activeSideBar = () => {
    setActiveSideBar(true)
  }
  const disableSideBar = () => {
    setActiveSideBar(false)
  }
  
  return (
    <>
      <Container>
        <Link href="/">Colima</Link>
        <IconMenu onClick={isActiveSideBar ? disableSideBar : activeSideBar}/>
        <NavBarLinks className="linkContainer">
          <Link href="About">Sobre</Link>
          <Link href="Instructors">Nossos Instrutores</Link>
          <Link href="ClassPage">Aulas</Link>
          <button>Reserve uma aula</button>
        </NavBarLinks>

      </Container>
        <SideBar active={isActiveSideBar}>
          <Link href="About">Sobre</Link>
          <Link href="Instructors">Nossos Instrutores</Link>
          <Link href="ClassPage">Aulas</Link>
          <button>Reserve uma aula</button>
        </SideBar>
    </>
  );
}
