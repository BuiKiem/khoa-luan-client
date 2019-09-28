import React, { useState } from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import { Button, Modal, Form, Input, Icon, Checkbox } from "antd";

import classes from "./SignIn.module.css";

export const SignIn = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    await console.log(values);
  }
})(
  ({
    values,
    visible,
    handleClose,
    handleChange,
    handleBlur,
    handleSubmit
  }) => {
    const [loading, setLoading] = useState(false);

    const handleOk = () => {
      setLoading(true);
      handleSubmit();
      setTimeout(() => {
        setLoading(false);
        handleClose();
      }, 3000);
    };

    return (
      <Modal
        visible={visible}
        title="Sign In"
        onOk={handleOk}
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose}>
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
          <Form.Item>
            <Input
              autoFocus
              name="email"
              type="email"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
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
