import React, { useState } from "react";
import PropTypes from "prop-types";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import { Button, Icon, Modal } from "antd";

import { CustomInputField } from "../CustomInputField/CustomInputField";
import { emailValidation, passwordValidation } from "../../validationSchemas";

const validationSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation
});

const initialValues = { email: "", password: "" };

export const SignIn = withFormik({
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
      title="Sign In"
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
          Sign In
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
      </div>
    </Modal>
  );
});

SignIn.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
