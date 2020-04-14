import React from "react";
import { BaseComment } from "./BaseComment";
import { IComment } from "../../types";

export function BaseCommentContainer(props: any) {
  return (
    <div className="base-comment__container">
      {props.children.map((comment: IComment, index: number) => (
        <div className="base-comment__container-item" key={index}>
          <BaseComment
            userAvatar={comment.user.avatar}
            userName={comment.user.name}
            text={comment.text}
            date={comment.date}
            child={comment.children}
          />
        </div>
      ))}
    </div>
  );
}
