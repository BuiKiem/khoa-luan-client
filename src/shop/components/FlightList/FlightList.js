import React from "react";
import { List } from "antd";

import { FlightItem } from "./FlightItem/FlightItem";

import classes from "./FlightList.module.css";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires2.",
  "Racing car sprays burning fuel into cr2owd.",
  "Japanese princess to wed 2.",
  "Australian walks 100km after outb2ack crash.",
  "Man charged over missing weddi2ng girl.",
  "Los Angeles battles huge wild2fires."
];

export const FlightList = () => {
  return (
    <List
      className={classes.flightListContainer}
      size="large"
      header={<div>Filter</div>}
      pagination={{
        pageSize: 5
      }}
      bordered
      dataSource={data}
      renderItem={item => <FlightItem />}
    />
  );
};
