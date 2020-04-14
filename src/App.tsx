import React, { useState } from "react";
import { BaseCommentContainer } from "./components/BaseComment/BaseCommentContainer";
import { IComment } from "./types";
import { CommentAppend } from "./widgets/CommentAppend/CommentAppend";
import innerData from "./innerData.json";

function formatJsonComment(data: any): IComment {
  const child = data.children || []
  return {
    user: {
      name: data.user.name,
      avatar: data.user.avatar
    },
    text: data.text,
    date: new Date(data.date),
    children: child.map((el: any) => formatJsonComment(el))
  }
}

function App() {

  const formatComments = innerData.map((el: any) => formatJsonComment(el))

  const [comments, setComments] = useState<IComment[]>(formatComments);

  const appendComment = (data: any) => {
    setComments([
      ...comments,
      {
        user: {
          name: data.userName,
          avatar: data.userAvatar,
        },
        date: new Date(data.date),
        text: data.text,
      },
    ]);
  };

  return (
    <div className="App">
      <BaseCommentContainer>{comments}</BaseCommentContainer>

      <h2>Добавить комментарий</h2>
      <CommentAppend onSubmit={(data: any) => appendComment(data)} />
    </div>
  );
}

export default App;
