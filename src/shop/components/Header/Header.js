import React from "react";
import { Menu, Typography, Icon, Layout, Button } from "antd";

import classes from "./Header.module.css";

export const Header = () => {
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

      <div className="headerActions">
        <Button size="large" className={classes.headerButton} type="primary">
          SIGN IN
        </Button>
        <Button size="large" className={classes.headerButton} type="danger">
          SIGN UP
        </Button>{" "}
      </div>
    </Layout.Header>
  );
};
