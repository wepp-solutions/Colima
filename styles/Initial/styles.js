import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  height: 100vh;

  div {
    p {
      font-size: clamp(1rem, 5vw, 1.4rem);
      max-width: 700px;
    }
    button {
      border: 2px solid #444;
      padding: 10px;
      background: transparent;
      margin-top: 20px;
      font-weight: 600;
      font-size: clamp(0.5rem, 5vw, 1.3rem);
      border-radius: 5px;
      transition: 0.5s ease-in-out;

      :hover {
        cursor: pointer;
        letter-spacing: 2px;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;
export const ImageBox = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.2);

  .img {
    border-radius: 100px;
  }
`;
