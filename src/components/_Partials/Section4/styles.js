import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  gap: 10px;
  margin: 100px auto;

  > p:nth-child(1) {
    font-size: clamp(1.6rem, 5vw, 2rem);
    max-width: 900px;
    font-weight: 500;
  }
  > p:nth-child(2) {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    max-width: 900px;
    font-weight: 300;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const ContainerCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 30px;
    flex-wrap: wrap;
`
export const Card = styled.div`
    position: relative;
    height: 400px;
    width: min(350px, 100%);

    
`