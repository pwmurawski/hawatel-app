/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 645px) {
    flex-direction: column;
    align-items: center;
  }
`;
