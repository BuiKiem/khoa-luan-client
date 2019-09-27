import React from "react";
import PropTypes from "prop-types";
import { Menu, Typography, Icon, Layout, Button } from "antd";

import classes from "./Header.module.css";

export const Header = ({ openSignUpModal, openSignInModal }) => {
  const currentUser = false;

  const headerActions = currentUser ? (
    <Button size="large" icon="user">
      User
    </Button>
  ) : (
    <>
      <Button
        onClick={openSignInModal}
        size="large"
        className={classes.headerButton}
        type="primary"
      >
        SIGN IN
      </Button>
      <Button
        onClick={openSignUpModal}
        size="large"
        className={classes.headerButton}
        type="danger"
      >
        SIGN UP
      </Button>
    </>
  );

  return (
    <Layout.Header className={classes.header}>
      <Typography.Title className={classes.logo} type="warning" level={2}>
        Travellers
      </Typography.Title>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        className={classes.menu}
      >
        <Menu.Item key="1">
          <Icon type="home" />
          Hotel
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="rocket" />
          Flight
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="percentage" />
          Promotion
        </Menu.Item>
      </Menu>

      <div className={classes.grow} />
      <div className="headerActions">{headerActions}</div>
    </Layout.Header>
  );
};

Header.propTypes = {
  openSignUpModal: PropTypes.func.isRequired,
  openSignInModal: PropTypes.func.isRequired
};
