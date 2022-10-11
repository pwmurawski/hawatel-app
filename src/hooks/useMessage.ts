import { useEffect, useState } from "react";
import { IMessage } from "../components/Message/Message";

const useMessage = (ms: number): [msg: typeof msg, setMsg: typeof setMsg] => {
  const [msg, setMsg] = useState<IMessage>();

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg(undefined);
      }, ms);
    }
  }, [msg]);

  return [msg, setMsg];
};

export default useMessage;
