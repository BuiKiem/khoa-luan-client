import React from "react";
import { Typography, Button } from "antd";

import classes from "./Title.module.css";

export const Title = () => {
  return (
    <div className={classes.titleContainer}>
      <Typography.Title level={4}>Filter Result By: </Typography.Title>
      <Button type="link">Reset Filter</Button>
    </div>
  );
};
