import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  height: 100%;

  width: 90%;
`;

export const CardsFlex = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    @media (min-width: 760px) {
        flex-wrap: nowrap;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px;
    width: 100%;

    > p {
        margin: 20px 0;
        width: min(500px, 100%);
        font-size: clamp(1rem, 5vw, 1.4rem);
    }

    > button {
        width: 120px;
        height: 50px;
        border: none;
        outline: none;
        font-size: 18px;
        background: #6c757d;
        color: #fff;
    }
`
export const Title = styled.div`
    font-size: clamp(1.7rem, 5vw, 2.5rem);
    font-weight: 500;
    margin: 10px 0;
`
export const CardsWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 400px;
    width: min(100%, 100%);

    .img {
        filter: brightness(60%);
    }
`
export const TitleCard = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);

    font-size: clamp(1.4rem, 5vw, 2rem);
    font-weight: 500;
`