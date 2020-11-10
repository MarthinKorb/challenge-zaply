import styled from 'styled-components';

export const Container = styled.div``;

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  margin-top: 30px;

  display: block;
  color: #3a3a3a;

  .button-add-new {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 40px;

    .input-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      input {
        width: 50vw;
        height: 56px;
        padding: 0 24px 0 32px;
        border-radius: 8px;
        color: #3a3a3a;
        border: 1px solid #a8a8b3;

        &::placeholder {
          color: #a8a8b3;
        }
      }
      svg {
        position: absolute;
        margin-left: 12px;
        color: #a8a8b3;
      }
    }
  }
`;
