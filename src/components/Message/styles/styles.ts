import styled from "styled-components";

export const Msg = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 15px;
  left: calc(50% - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: fit-content;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ succes }: { succes?: boolean }) =>
    succes ? "#77ffd2" : "red"};
  z-index: 1;
  font-size: 13px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const Title = styled.div`
  font-weight: bold;
  text-transform: capitalize;
`;

export const Body = styled.div``;
