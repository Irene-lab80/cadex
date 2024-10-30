import { Button, Form, FormProps, Input } from "antd";
import React from "react";
import styled from "styled-components";

type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};

const StyledForm = styled(Form<FormProps>)`
  margin: 0 auto;
  max-width: 360px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TestPage = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const response = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();

    console.log("data", data);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <StyledForm
        layout="vertical"
        name="user message form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={"optional"}
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </StyledForm>
    </div>
  );
};

export default TestPage;