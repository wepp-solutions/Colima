import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 50px 0;

    h1 {
        font-size: clamp(1.6rem, 5vw, 3rem);
    }
    p {
        max-width: 800px;
        font-size: clamp(1.4rem, 5vw, 1.5rem);
    }

    div {
        display: flex;
        gap: 5px;
        margin-top: 20px;
    }
`
export const Wrapper = styled.div`
    display: flex;
    height: 100%;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`
export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

`