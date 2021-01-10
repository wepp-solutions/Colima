import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;

  width: 100%;
  height: 100%;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;

  ${props => props.large && css`
    height: 500px;
  `}
`;
export const Texts = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > p:nth-child(1) {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
  }
  > p:nth-child(2) {
    font-size: clamp(1rem, 4vw, 1.4rem);
    font-weight: 300;
    max-width: 650px;
    margin: 0 10px
  }
`;
export const ImageBox = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .img {
    filter: brightness(60%);
  }
`;
export const AboutClass = styled.div`
    margin: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    width: min(900px, 90%);

    > p:nth-child(1) {
        font-size: clamp(1.5rem, 6vw, 1.4rem);
    }
    > p:nth-child(2) {
        font-size: clamp(1.2rem, 6vw, 1.2rem);
        font-weight: 300;
    }

    ${props => props.secundary && css`
        text-align: right;
        border-left: none;
        padding-left: 0;
        margin-top: 50px;
    `}
`