import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin-bottom: 2rem;
  margin: 10px 5px 10px 5px;
  transition: box-shadow 0.2s;
  cursor: pointer;
  &&:hover {
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  }

  section.body {
    padding: 20px;

    div.icon-container {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;

      #icon-delete {
        background-color: #f95e5a;
        transition: all 0.2s;
      }
      #icon-delete:hover {
        opacity: 0.8;
      }
      button {
        background: #1fb754;
        padding: 4px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: all 0.2s;

        svg {
          color: #fff;
        }

        & + button {
          margin-left: 4px;
        }
      }
      button:hover {
        opacity: 0.8;
        svg {
          color: #3a3a3a;
        }
      }
    }

    div.main-content {
      margin: 10px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        margin-top: -40px;
        margin-right: 20px;
        margin-bottom: 20px;
        width: 100px;
        height: 100px;
      }
    }

    h3 {
      color: #3d3d4d;
      text-align: center;
      margin-bottom: 36px;
    }

    p + p {
      color: #3d3d4d;
      margin-top: 12px;
    }

    .price {
      font-style: normal;
      font-size: 18px;
      line-height: 34px;
      color: #1fb754;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    padding: 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;
  }
`;
