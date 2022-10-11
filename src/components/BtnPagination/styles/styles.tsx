/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Btn = styled.button`
  position: relative;
  align-self: center;
  width: 40px;
  height: 40px;
  background-color: whitesmoke;
  border: 0;
  margin: 20px;
  border-radius: 50%;
  box-shadow: 0 2px 3px 0 gray;
  cursor: pointer;

  :hover {
    background-color: #77ffd2;
  }

  ::before {
    content: "";
    position: absolute;
    right: 5px;
    width: 18px;
    height: 3px;
    border-radius: 20px;
    background-color: black;
    transform: ${({ position }: { position: "top" | "bottom" }) =>
      position === "bottom" ? "rotate(-45deg)" : "rotate(45deg)"};
  }

  ::after {
    content: "";
    position: absolute;
    left: 5px;
    width: 18px;
    height: 3px;
    border-radius: 20px;
    background-color: black;
    transform: ${({ position }: { position: "top" | "bottom" }) =>
      position === "bottom" ? "rotate(45deg)" : "rotate(-45deg)"};
  }
`;
