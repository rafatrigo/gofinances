import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;

  max-width: 1120px;
  max-height: 144px;

  @media (max-width: 985px) {
    margin-top: -125px;
    max-height: 114px;
  }

  @media (max-width: 715px) {
    margin-top: -110px;
    max-height: 98px;
  }

  @media (max-width: 540px) {
    margin-top: -100px;
    max-height: 73px;

    grid-gap: 16px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-top: -150px;

    max-height: 251px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const Card = styled.div<CardProps>`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};

  transition: 0.2s;

  &:hover {
    margin: -20px 0 20px 0;
    border: 2px solid #969cb3;
    padding: 20px 30px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }

  @media (max-width: 985px) {
    padding: 14px 24px;

    &:hover {
      padding: 12px 22px;
    }

    h1 {
      margin-top: 12px;
      font-size: 24px;
      line-height: 42px;
    }
  }

  @media (max-width: 715px) {
    padding: 10px 20px;

    &:hover {
      padding: 8px 18px;
    }

    h1 {
      margin-top: 10px;
      font-size: 16px;
      line-height: 36px;
    }
  }

  @media (max-width: 540px) {
    padding: 6px 16px;

    &:hover {
      margin: -10px 0 10px 0;
      padding: 4px 14px;
    }

    img {
      visibility: hidden;
    }

    h1 {
      margin-top: 5px;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 480px) {
    &:hover {
      margin: 0 -10px 0 10px;
      padding: 4px 14px;
    }

    img {
      visibility: visible;
    }
  }
`;
