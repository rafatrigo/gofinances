import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};

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
`;

export const TableContainer = styled.section`
  margin-top: 64px;
  width: 100%;
`;

export const Table = styled.div`
  width: 100%;
  height: 100%;
  border-spacing: 0 8px;
`;
export const TableHead = styled.div`
  width: 100%;
  color: #969cb3;
  font-weight: normal;
  padding: 20px 32px;
  text-align: left;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  flex-direction: row;

  margin-bottom: 20px;

  span {
    display: flex;
    flex: 1;
  }
`;

export const TableBody = styled.div`
  width: 100%;

  div:first-child {
    border-radius: 8px 8px 0 0;
  }

  div:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

export const TableRow = styled.div`
  width: 100%;
  background: #fff;
  height: 65px;

  display: flex;
  align-items: center;

  margin-bottom: 8px;
`;

export const TableData = styled.span`
  padding: 20px 32px;
  border: 0;

  font-size: 16px;
  font-weight: normal;
  color: #969cb3;

  display: flex;
  flex: 1;

  &.title {
    color: #363f5f;
  }

  &.income {
    color: #12a454;
  }

  &.outcome {
    color: #e83f5b;
  }
`;

export const ButtonDelete = styled.button`
  height: 65px;
  width: 25px;

  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;

  margin-right: 10px;
`;
