import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  width: 100%;
  margin: 5px 0;
  padding: 5px;
  font-size: 13px;
  background-color: white;
`;

export const Id = styled.div`
  align-self: flex-start;
`;

export const PostId = styled.div`
  align-self: flex-start;
`;

export const Name = styled.h3`
  font-size: 15px;
  margin: 5px;
`;

export const Body = styled.div``;

export const Email = styled.div`
  align-self: flex-end;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
`;
