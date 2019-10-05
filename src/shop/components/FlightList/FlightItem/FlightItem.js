import React, { useState } from "react";
import { Typography, Avatar, Button, List, Divider } from "antd";

import classes from "./FlightItem.module.css";

export const FlightItem = () => {
  const [showDetail, setShowDetail] = useState(false);
  const toggleShowDetail = () => setShowDetail(!showDetail);
  return (
    <List.Item className={classes.flightItemContainer}>
      <div className={classes.flightGeneralContainer}>
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
          <Typography.Title level={3}>[1.320.407 VND]</Typography.Title>
          <div className={classes.itemActionContainer}>
            <Button type="primary">Choose</Button>
            <Button onClick={toggleShowDetail} type="default">
              Fare Info
            </Button>
          </div>
        </div>
      </div>

      {showDetail && (
        <div className={classes.fareDetailContainer}>
          <div className={classes.fareDetailItem}>
            <Typography.Paragraph strong>
              Adult Basic Fare (x[1])
            </Typography.Paragraph>
            <Typography.Paragraph strong>625.113</Typography.Paragraph>
          </div>
          <div className={classes.fareDetailItem}>
            <Typography.Paragraph strong>
              Child Basic Fare (x[1])
            </Typography.Paragraph>
            <Typography.Paragraph strong>625.113</Typography.Paragraph>
          </div>
          <div className={classes.fareDetailItem}>
            <Typography.Paragraph type="secondary">Tax</Typography.Paragraph>
            <Typography.Paragraph type="secondary">
              Included
            </Typography.Paragraph>
          </div>

          <Divider />
          <div className={classes.fareDetailItem}>
            <Typography.Paragraph strong>Total </Typography.Paragraph>
            <Typography.Paragraph strong>1.320.407 VND</Typography.Paragraph>
          </div>
        </div>
      )}
    </List.Item>
  );
};
