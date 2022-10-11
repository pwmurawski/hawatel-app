import { IUser } from "../../interfaces/IUser";
import User from "./User/User";

interface IUsersProps {
  usersData: IUser[];
}

export default function Users({ usersData }: IUsersProps) {
  return (
    <>
      {usersData.map((userData) => (
        <User key={userData.id} userData={userData} />
      ))}
    </>
  );
}
