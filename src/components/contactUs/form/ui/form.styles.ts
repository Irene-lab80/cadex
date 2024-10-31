import { Form, FormProps, Input } from "antd";
import styled from "styled-components";
import { FieldType } from "../utils/types";

export const StyledForm = styled(Form<FormProps>)`
  margin: 40px auto;
  max-width: 360px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #ffffff;

  @media (max-width: 768px) {
    margin: 40px auto;
  }
`;

export const StyledItem = styled(Form.Item<FieldType>)`
  && label {
    color: var(--dark);
  }
`;

export const StyledInput = styled(Input)`
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background: var(--light);
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background: var(--light);
  }
`;
export const Wrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
