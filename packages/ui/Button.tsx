import React from "react";

interface ButtonComponentProps {
  title: string;
}

export const ButtonComponent = ({ title }: ButtonComponentProps) => {
  return <button>{title}</button>;
};
