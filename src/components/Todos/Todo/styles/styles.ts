import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 gray;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Id = styled.div``;

export const UserId = styled.div``;

export const Title = styled.div``;

export const DueOn = styled.div``;

export const Status = styled.div``;
