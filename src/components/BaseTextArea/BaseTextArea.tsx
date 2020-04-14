import React from "react";
import "./BaseTextArea.sass";

export function BaseTextArea(props: any) {
  const typed = (e: any) => {
    const { value } = e.target;
    props.onChange(value);
  };

  return (
    <div className={`base-text-area ${props.className}`}>
      <textarea
        placeholder={props.placeholder}
        className="base-text-area__area"
        value={props.value}
        onChange={typed}
      />
    </div>
  );
}
