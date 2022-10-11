import { ReactElement } from "react";
import { Container, Wrapper } from "./styles/styles";

interface ILayoutProps {
  header: ReactElement;
  content: ReactElement;
}

export default function Layout({ header, content }: ILayoutProps) {
  return (
    <Wrapper>
      <Container>
        {header}
        {content}
      </Container>
    </Wrapper>
  );
}
