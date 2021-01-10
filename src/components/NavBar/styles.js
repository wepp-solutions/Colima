import styled, { css } from "styled-components";
import { VscMenu } from "react-icons/vsc";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  padding: 10px 20px;
  width: 100%;

  color: #fff;
  background: #212529;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  transition: 0.5s ease-in-out;
  transform: translateY(0);

  > a {
    font-size: clamp(1.6rem, 5vw, 2.3rem);
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
  }
`;
export const IconMenu = styled(VscMenu)`
  font-size: clamp(1.6rem, 5vw, 2rem);
  cursor: pointer;

  @media (min-width: 760px) {
    display: none;
  }
`;
export const NavBarLinks = styled.div`
  display: none;

  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    gap: 20px;

    > a {
      text-decoration: none;
      font-size: 20px;
      color: #fff;
      letter-spacing: 1px;
    }

    > button {
      padding: 10px 20px;
      border: 2px solid #fff;
      background: transparent;
      color: #fff;
      letter-spacing: 2px;
      font-size: 18px;
      margin-left: 20px;

      :hover {
        background: #fff;
        color: #000;
        cursor: pointer;
      }
    }
  }
`;
export const SideBar = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 50%;
  background: #212529;
  opacity: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  transform: translateY(-100%);
  transition: 0.5s ease-in-out;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      transform: translateY(0);
      transition: 0.5s ease-in-out;
    `}

  > a {
    text-decoration: none;
    font-size: 25px;
    color: #fff;
    letter-spacing: 1px;
  }
  > button {
    padding: 10px 20px;
    border: 2px solid #fff;
    background: transparent;
    color: #fff;
    letter-spacing: 2px;
    font-size: 18px;
    margin-left: 20px;

    :hover {
      background: #fff;
      color: #000;
      cursor: pointer;
    }
  }

  @media (min-width: 760px) {
    display: none;
  }
`;
