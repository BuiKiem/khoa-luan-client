import React, { useState } from "react";
import { Typography } from "antd";

import classes from "./Header.module.css";
import { AirLineFilter } from "../AirLineFilter/AirLineFilter";

export const FlightFilter = () => {
  const [showAirline, setShowAirline] = useState(false);

  const toggleShowAirLine = () => setShowAirline(!showAirline);
  return (
    <div className={classes.headerContainer}>
      <Typography.Text strong>Filter:</Typography.Text>
      <AirLineFilter
        handleVisibleChange={toggleShowAirLine}
        visible={showAirline}
      />
      <div>Price</div>
    </div>
  );
};
