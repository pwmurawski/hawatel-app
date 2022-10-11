import { useState } from "react";
import postPosts from "../../helpers/postPosts";
import useMessage from "../../hooks/useMessage";
import InputCustom from "../InputCustom/InputCustom";
import Message from "../Message/Message";
import { Container, SubbmitBtn } from "./styles/styles";

const initForm = {
  user: "",
  user_id: "",
  title: "",
  body: "",
};

export default function AddPostsForm() {
  const [form, setForm] = useState(initForm);
  const [msg, setMsg] = useMessage(5000);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await postPosts(form);
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
        placeholder="User"
        value={form.user}
        onChange={(e) => setForm({ ...form, user: e.target.value })}
      />
      <InputCustom
        placeholder="User id"
        value={form.user_id}
        onChange={(e) => setForm({ ...form, user_id: e.target.value })}
      />
      <InputCustom
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <InputCustom
        placeholder="Body"
        value={form.body}
        onChange={(e) => setForm({ ...form, body: e.target.value })}
      />
      <SubbmitBtn type="submit">Dodaj</SubbmitBtn>
    </Container>
  );
}
