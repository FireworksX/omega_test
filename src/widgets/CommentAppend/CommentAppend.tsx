import React, { useState } from "react";
import { BaseInput } from "../../components/BaseInput/BaseInput";
import { BaseTextArea } from "../../components/BaseTextArea/BaseTextArea";
import "./CommentAppend.sass";

export function CommentAppend(props: any) {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const submit = () => {
    props.onSubmit({
      userName,
      userAvatar,
      date,
      text,
    });
  };

  return (
    <div className="comment-append">
      <BaseInput
        value={userName}
        placeholder="Имя пользователя"
        onChange={(val: string) => setUserName(val)}
      />
      <BaseInput
        value={userAvatar}
        placeholder="Аватарка пользователя"
        onChange={(val: string) => setUserAvatar(val)}
      />
      <BaseInput
        value={date}
        placeholder="Дата (2020-03-13)"
        onChange={(val: string) => setDate(val)}
      />
      <BaseTextArea
        className="comment-append__area"
        value={text}
        onChange={setText}
        placeholder="Текст комментария"
      />
      <button className="comment-append__append" onClick={submit}>
        Добавить коментарий
      </button>
    </div>
  );
}
