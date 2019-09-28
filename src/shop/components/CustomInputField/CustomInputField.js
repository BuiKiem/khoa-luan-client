import React from "react";
import { Form, Input } from "antd";

export const CustomInputField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errorMessage = touched[field.name] && errors[field.name];
  return (
    <Form.Item
      help={errorMessage}
      validateStatus={errorMessage ? "error" : undefined}
    >
      <Input {...field} {...props} />
    </Form.Item>
  );
};
