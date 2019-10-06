import React, { useState } from "react";
import { Typography } from "antd";

import classes from "./Header.module.css";
import { AirLineFilter } from "../AirLineFilter/AirLineFilter";
import { FlightPriceFilter } from "../FlightPriceFilter/FlightPriceFilter";

export const FlightFilter = () => {
  const [showAirline, setShowAirline] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);

  const toggleShowPriceRange = () => setShowPriceRange(!showPriceRange);
  const toggleShowAirLine = () => setShowAirline(!showAirline);
  return (
    <div className={classes.headerContainer}>
      <Typography.Text strong>Filter:</Typography.Text>
      <AirLineFilter
        handleVisibleChange={toggleShowAirLine}
        visible={showAirline}
      />
      <FlightPriceFilter
        visible={showPriceRange}
        handleVisibleChange={toggleShowPriceRange}
      />
    </div>
  );
};
