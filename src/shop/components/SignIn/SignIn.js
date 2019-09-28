import React, { useState } from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import * as yup from "yup";
import { Button, Checkbox, Form, Icon, Input, Modal } from "antd";

import classes from "./SignIn.module.css";
import { emailValidation, passwordValidation } from "../../validationSchemas";

const validationSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation
});

const initialValues = { email: "", password: "" };

export const SignIn = withFormik({
  validationSchema,
  validateOnChange: false,
  mapPropsToValues: () => initialValues,
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    await console.log(values);
  }
})(
  ({
    visible,
    handleClose,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    resetForm
  }) => {
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
          >
            Sign In
          </Button>
        ]}
      >
        <div>
          <Form.Item
            help={touched.email && errors.email ? errors.email : ""}
            validateStatus={touched.email && errors.email ? "error" : undefined}
          >
            <Input
              name="email"
              type="email"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            help={touched.password && errors.password ? errors.password : ""}
            validateStatus={
              touched.password && errors.password ? "error" : undefined
            }
          >
            <Input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className={classes.loginFormForgot} href="#">
              Forgot password
            </a>
          </Form.Item>
        </div>
      </Modal>
    );
  }
);

SignIn.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
