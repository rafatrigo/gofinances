import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface TransactionTypeProps {
  transaction: string;
}

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  height: 100vh;
  width: 100vw;

  z-index: 100;

  background-color: #ff872c;
  opacity: 0.8;
`;

export const FormContainer = styled.div`
  background-color: #e5e5e5;

  z-index: 110;
  position: absolute;

  height: 410px;
  width: 400px;

  border-radius: 8px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #363f5f;

    h1 {
      margin: 10px;
    }

    div {
      width: 350px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      margin-bottom: 15px;
    }
  }
`;

export const TransactionType = styled.div<TransactionTypeProps>`
  button {
    height: 50px;
    width: 150px;

    color: #363f5f;

    border: 2px solid #969cb2;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    img {
      margin-right: 10px;
    }

    ${props =>
      props.transaction === 'income'
        ? css`
            &:first-child {
              border-color: #12a454;
              color: #12a454;
            }
          `
        : css`
            &:last-child {
              border-color: #e83f5b;
              color: #e83f5b;
            }
          `}
  }
`;

export const CancelOrSubmit = styled.div`
  margin-top: 20px;

  button {
    height: 50px;
    width: 170px;

    border-radius: 8px;
    border: none;
  }

  button:first-child {
    border: 2px solid #e83f5b;
    color: #e83f5b;

    transition: 0.3s;

    &:hover {
      background-color: #e83f5b;
      color: #fff;
    }
  }

  button:last-child {
    background-color: #ff872c;
    color: #fff;

    transition: 0.3s;

    &:hover {
      background-color: ${shade(0.3, '#ff872c')};
    }
  }
`;
