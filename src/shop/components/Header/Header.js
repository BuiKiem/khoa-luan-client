import React from "react";
import { Menu, Typography, Icon } from "antd";

import classes from "./Header.module.css";

const { Title } = Typography;

export const Header = () => {
  return (
    <header>
      <Title className={classes.logo} type="warning" level={2}>
        Travellers
      </Title>

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
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </header>
  );
};
