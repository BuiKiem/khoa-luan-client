import React from "react";
import { Card, Radio, Typography } from "antd";

import classes from "./HotelsSort.module.css";

export const HotelsSort = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Card title={<Typography.Title level={4}>Sort Result By: </Typography.Title>} className={classes.hotelsSortCard}>
        <Radio.Group>
          <Radio value={1}>Highest Price</Radio>
          <Radio value={2}>Lowest Price</Radio>
        </Radio.Group>
      </Card>
    </div>
  );
};
