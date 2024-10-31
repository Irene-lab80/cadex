import React from "react";
import { DIV } from "./userMessage.styles";

interface IProps {
  message: string;
}

export const UserMessage = ({ message }: IProps) => (
  <DIV>
    <h3>{message}</h3>
  </DIV>
);
