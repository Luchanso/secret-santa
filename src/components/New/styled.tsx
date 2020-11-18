import styled from "styled-components";

export const Container = styled.div`
  margin: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;

  * + * {
    margin-top: 20px;
  }

  * {
    width: 400px;
  }
`;
