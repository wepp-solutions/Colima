import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  gap: 200px 0;
  width: 90%;
  height: 100%;
`;
export const FirstWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;

    > div {
        width: min(700px, 100%);
        > p:nth-child(1) {
            font-size: clamp(1rem, 5vw, 1.8rem);
            font-weight: bold;
            margin: 20px 0;
        }
        > p:nth-child(2) {
            font-size: clamp(1rem, 5vw, 1.6rem);
            font-weight: 300;
        }
    }

    @media (min-width: 1007px) {
        flex-direction: row;
        gap: 30px;
    }
`
export const SecundaryWrapper = styled.div`
    width: 100%;
    height: 400px;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`
export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    
    .img {
        filter: brightness(50%);
    }

    ${props => props.first && css`
        height: 400px;
        width: min(400px, 100%);
    `}
`
export const ContentSecundaryWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    > p:nth-child(1) {
        font-size: clamp(1.3rem, 5vw, 1.6rem);
        font-weight: 500;
    }
    > p:nth-child(2) {
        font-size: clamp(0.2rem, 5vw, 1.3rem);
        max-width: 700px;
    }
`