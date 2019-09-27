import React, { useState } from "react";
import { Modal, Button } from "antd";

export const SignUp = () => {
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const showModal = () => setVisible(true);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => setVisible(false);

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
        >
          Sign Up
        </Button>
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
