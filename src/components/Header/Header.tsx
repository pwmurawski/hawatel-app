import { Container, LinkStyled, Nav } from "./styles/styles";

export default function Header() {
  return (
    <Container>
      <Nav>
        <LinkStyled to="/users">Users</LinkStyled>
        <LinkStyled to="/posts">Posts</LinkStyled>
        <LinkStyled to="/todos">Todos</LinkStyled>
      </Nav>
    </Container>
  );
}
