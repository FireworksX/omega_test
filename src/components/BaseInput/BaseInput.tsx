import React from "react";
import './BaseInput.sass'

export function BaseInput(props: any) {
  const inputTyped = (e: any) => {
    const { value } = e.target;
    props.onChange(value);
  };

  return (
    <div className="base-input">
      <input
          className="base-input__original"
        placeholder={props.placeholder}
        value={props.value}
        type="text"
        onChange={inputTyped}
      />
    </div>
  );
}
