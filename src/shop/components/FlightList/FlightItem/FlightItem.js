import React from "react";
import { Row, Col, Typography, Icon, Avatar, Button, List } from "antd";

import classes from "./FlightItem.module.css";

export const FlightItem = () => {
  return (
    <List.Item className={classes.flightItemContainer}>
      <div>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Typography.Title style={{ display: "inline" }} level={4}>
          [Vietjet Air]
        </Typography.Title>
      </div>
      <div>
        <Typography.Title style={{ display: "inline" }} level={4}>
          [21:35]
        </Typography.Title>
      </div>
      <div>
        <Typography.Title style={{ display: "inline" }} level={4}>
          [23:45]
        </Typography.Title>
      </div>
      <div>
        <Typography.Title style={{ display: "inline" }} level={4}>
          [2h 10m]
        </Typography.Title>
      </div>
      <div>
        <Typography.Title level={3}>[625.113 VND]/pax</Typography.Title>
        <Button type="primary" block>
          Choose
        </Button>
      </div>
    </List.Item>
  );
};
