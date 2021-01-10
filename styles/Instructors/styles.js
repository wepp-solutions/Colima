import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;

  width: 90%;
  height: 100%;
  margin: 100px auto;
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  gap: 30px;

  > div {
    > p:nth-child(1) {
      font-size: clamp(1.4rem, 5vw, 2rem);
      font-weight: 600;
      margin: 10px 0;
    }
    > p:nth-child(2) {
      font-size: clamp(1rem, 3vw, 1.6rem);
      font-weight: 300;
      max-width: 600px;
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;
export const ImageBox = styled.div`
  position: relative;
  width: min(500px, 100%);
  height: 500px;

  .img {
    object-position: 50%, 50%;
  }
`;
