import React from "react";
import {
  StyledForm,
  StyledInput,
  StyledItem,
  StyledTextArea,
  Wrapper,
} from "./form.styles";
import { Button } from "antd";
import { FieldType } from "../utils/types";

interface IProps {
  onFinish: (arg: FieldType) => void;
}
export const Form = ({ onFinish }: IProps) => (
  <Wrapper>
    <StyledForm
      layout="vertical"
      name="user message form"
      onFinish={onFinish}
      autoComplete="off"
      requiredMark={"optional"}
    >
      <StyledItem
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <StyledInput />
      </StyledItem>

      <StyledItem
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <StyledInput />
      </StyledItem>

      <StyledItem
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please input your message!" }]}
      >
        <StyledTextArea />
      </StyledItem>

      <StyledItem>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
      </StyledItem>
    </StyledForm>
  </Wrapper>
);
