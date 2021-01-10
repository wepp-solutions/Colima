import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 0;
  height: 150px;
  width: 100%;
  background: #111;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (min-width: 1100px) {
      flex-direction: row;
      gap: 30px;
  }

  > p {
      font-size: clamp(1rem, 5vw, 1.2rem);
  }
`;
