import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  navigation: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;
  width: 100%;

  header {
    width: calc(100% - 15px);
    max-width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }

      div {
        padding-bottom: 10px;
      }

      div + div {
        margin-left: 10px;
      }
    }

    ${props =>
      props.navigation === '/'
        ? css`
            div:first-child {
              border-bottom: 2px solid #ff872c;
            }

            div:last-child {
              opacity: 0.6;
            }
          `
        : css`
            div:first-child {
              opacity: 0.6;
            }

            div:last-child {
              border-bottom: 2px solid #ff872c;
            }
          `}
  }

  @media (max-width: 490px) {
    header {
      flex-direction: column;
      img {
        margin-bottom: 30px;
      }
    }
  }
`;
