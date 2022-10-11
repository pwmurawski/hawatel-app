import { useState } from "react";
import postUsers from "../../helpers/postUsers";
import useMessage from "../../hooks/useMessage";
import { IUser } from "../../interfaces/IUser";
import InputCustom from "../InputCustom/InputCustom";
import Message from "../Message/Message";
import { Container, SubbmitBtn } from "./styles/styles";

const initForm: Omit<IUser, "id"> = {
  name: "",
  email: "",
  gender: "",
  status: "",
};

export default function AddUsersForm() {
  const [form, setForm] = useState(initForm);
  const [msg, setMsg] = useMessage(5000);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await postUsers(form);
    if (res.data.id) {
      setForm(initForm);
      setMsg({ succes: "Succes" });
    } else {
      setMsg({ error: res.data });
      if (res.data.message) setMsg({ message: res.data.message });
    }
  };

  return (
    <Container onSubmit={submit}>
      <Message msg={msg} />
      <InputCustom
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <InputCustom
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <InputCustom
        placeholder="Gender"
        value={form.gender}
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
      />
      <InputCustom
        placeholder="Status"
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      />
      <SubbmitBtn type="submit">Dodaj</SubbmitBtn>
    </Container>
  );
}
