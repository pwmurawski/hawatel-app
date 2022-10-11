import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const LinkStyled = styled(NavLink)`
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  border-radius: 10px;

  &.active {
    background-color: whitesmoke;
    box-shadow: 0 1px 2px 0 gray;
  }
`;
