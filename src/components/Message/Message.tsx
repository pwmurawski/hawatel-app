import { Body, Container, Msg, Title } from "./styles/styles";

export interface IMessage {
  succes?: string;
  error?: [];
  message?: string;
}

interface IMsgProps {
  msg: IMessage | undefined;
}

export default function Message({ msg }: IMsgProps) {
  if (!msg) return null;
  if (msg.succes) return <Msg succes>{msg.succes}</Msg>;
  if (msg.message) return <Msg>{msg.message}</Msg>;
  if (msg.error)
    return (
      <Msg>
        {msg.error.map(({ field, message }) => (
          <Container key={field}>
            <Title>{field}</Title>
            <Body>{message}</Body>
          </Container>
        ))}
      </Msg>
    );

  return null;
}
