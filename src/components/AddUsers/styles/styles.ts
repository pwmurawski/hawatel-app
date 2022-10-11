/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.form`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 0;
`;

export const SubbmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  margin-left: 10px;
  background-color: #77ffd2;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;
