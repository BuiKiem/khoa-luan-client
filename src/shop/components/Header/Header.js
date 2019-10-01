import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, Typography, Icon, Layout, Button } from "antd";

import classes from "./Header.module.css";
import { Link, withRouter } from "react-router-dom";

export const Header = withRouter(
  ({ location, openSignUpModal, openSignInModal }) => {
    const [menuKey, setMenuKey] = useState(location.pathname);
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
        <Link to="/" onClick={() => setMenuKey("")}>
          <Typography.Title className={classes.logo} type="warning" level={2}>
            Travellers
          </Typography.Title>
        </Link>
        <Menu
          selectedKeys={menuKey}
          theme="dark"
          mode="horizontal"
          className={classes.menu}
          defaultSelectedKeys={["hotels", "flights", "promotions"]}
        >
          <Menu.Item key="/hotels" onClick={() => setMenuKey("/hotels")}>
            <Link to="/hotels">
              <Icon type="home" />
              Hotel
            </Link>
          </Menu.Item>
          <Menu.Item key="/flights" onClick={() => setMenuKey("/flights")}>
            <Link to="/flights">
              <Icon type="rocket" />
              Flight
            </Link>
          </Menu.Item>
          <Menu.Item
            key="/promotions"
            onClick={() => setMenuKey("/promotions")}
          >
            <Link to="/promotions">
              <Icon type="percentage" />
              Promotion
            </Link>
          </Menu.Item>
        </Menu>

        <div className={classes.grow} />
        <div className="headerActions">{headerActions}</div>
      </Layout.Header>
    );
  }
);

Header.propTypes = {
  openSignUpModal: PropTypes.func.isRequired,
  openSignInModal: PropTypes.func.isRequired
};
