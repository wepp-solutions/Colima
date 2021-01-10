import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
`;
export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    .img {
        object-fit: cover;
        object-position: 50% 80%;
        filter: brightness(50%);
    }
`
export const ContentWrapper = styled.div`
    position: absolute;
    top: 60%;
    left: 3%;
    width: min(600px, 90%);
    transform: translate(3%, -50%);


    > p:nth-child(1) {
        font-size: clamp(2rem, 5vw, 3.5rem);
        max-width: 700px;
        font-weight: 500;
        margin: 10px 0;
    }
    > p:nth-child(2) {
        font-size: clamp(1rem, 5vw, 1.6rem);
        font-weight: 300;
        font-style: italic;
    }

    > p:nth-child(3) {
        max-width: 250px;
        padding: 5px 0;
        margin: 20px 0;
        border-bottom: 2px solid #fff;
        font-size: clamp(0.7rem, 5vw, 1.5rem);
        color: #fff;
        font-weight: normal;
        background: transparent;
    }
`