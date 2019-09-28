import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Icon, Modal } from "antd";
import { Field, withFormik } from "formik";
import * as yup from "yup";

import {
  emailValidation,
  passwordValidation,
  confirmPasswordValidation
} from "../../validationSchemas";
import { CustomInputField } from "../CustomInputField/CustomInputField";

const validationSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
  password2: confirmPasswordValidation
});

const initialValues = { email: "", password: "", password2: "" };

export const SignUp = withFormik({
  validationSchema,
  mapPropsToValues: () => initialValues,
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    await console.log(values);
  }
})(({ visible, handleClose, handleSubmit, resetForm, isValid }) => {
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    handleClose();
    resetForm(initialValues);
  };

  const handleOk = () => {
    setLoading(true);
    handleSubmit();
    setTimeout(() => {
      setLoading(false);
      handleClose();
      resetForm();
    }, 3000);
  };

  return (
    <Modal
      visible={visible}
      title="Sign Up"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
          disabled={!isValid}
        >
          Sign Up
        </Button>
      ]}
    >
      <div>
        <Field
          name="email"
          type="email"
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="email"
          component={CustomInputField}
        />
        <Field
          name="password"
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Password"
          component={CustomInputField}
        />
        <Field
          name="password2"
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Confirm Password"
          component={CustomInputField}
        />
      </div>
    </Modal>
  );
});

SignUp.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
