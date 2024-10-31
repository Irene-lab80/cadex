import React from "react";
import { DIV } from "./userMessage.styles";

interface IProps {
  message: string;
}

export const UserMessage = ({ message }: IProps) => <DIV>{message}</DIV>;
