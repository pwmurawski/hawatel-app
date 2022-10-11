import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 5px 0;
  border-radius: 10px;
  background-color: whitesmoke;
  box-shadow: 0 1px 2px 0 gray;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Id = styled.div``;

export const Name = styled.div``;

export const Email = styled.div``;

export const Gender = styled.div``;

export const Status = styled.div``;
