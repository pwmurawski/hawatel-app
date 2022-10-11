import styled from "styled-components";

export const Container = styled.section`
  --margin: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(50% - var(--margin) * 2);
  margin: var(--margin);
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 gray;

  @media (max-width: 645px) {
    width: calc(100% - var(--margin) * 2);
  }
`;

export const Id = styled.div``;

export const UserId = styled.div``;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

export const Body = styled.div``;
