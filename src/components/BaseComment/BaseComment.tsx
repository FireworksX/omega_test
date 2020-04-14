import React, { useState } from "react";
import "./BaseComment.sass";
import { BaseCommentContainer } from "./BaseCommentContainer";
import { BaseTextArea } from "../BaseTextArea/BaseTextArea";

export function BaseComment(props: any) {
  const [text, setText] = useState(props.text);
  const [edit, setEdit] = useState(false);

  const formatDate = (date: Date) => {
    if (date !== undefined) {
      return date.toLocaleDateString();
    }
    return "";
  };

  return (
    <div className="base-comment">
      <img
        src={props.userAvatar}
        alt="user avatar"
        className="base-comment__avatar"
      />
      <div className="base-comment__name">
        {props.userName}
        <button className="base-comment__edit" onClick={() => setEdit(!edit)}>
          {edit ? "Сохранить" : "Радактировать"}
        </button>
      </div>
      <div className="base-comment__date">{formatDate(props.date)}</div>
      {edit ? (
        <BaseTextArea
          className="base-comment__area"
          value={text}
          onChange={(val: string) => setText(val)}
        />
      ) : (
        <div className="base-comment__text">{text}</div>
      )}
      {props.child !== undefined && (
        <div className="base-comment__child">
          <BaseCommentContainer>{props.child}</BaseCommentContainer>
        </div>
      )}
    </div>
  );
}
