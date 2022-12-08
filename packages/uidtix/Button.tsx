import * as React from "react";

interface Props {
  color?: string;
}

export const Button = ({ color = "red" }: Props) => {
  return (
    <button
      style={{
        background: color,
      }}
    >
      Boop 123123 xxxxxx
    </button>
  );
};
