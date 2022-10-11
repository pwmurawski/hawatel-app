import { IUser } from "../../../interfaces/IUser";
import { Container, Email, Gender, Id, Name, Status } from "./styles/styles";

interface IUserProps {
  userData: IUser;
}

export default function User({
  userData: { email, gender, id, name, status },
}: IUserProps) {
  return (
    <Container>
      <Id>{id}</Id>
      <Name>{name}</Name>
      <Email>{email}</Email>
      <Gender>{gender}</Gender>
      <Status>{status}</Status>
    </Container>
  );
}
