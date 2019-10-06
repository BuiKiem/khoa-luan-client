import React, { useState } from "react";
import { Typography } from "antd";

import { AirLineFilter } from "../AirLineFilter/AirLineFilter";
import { FlightPriceFilter } from "../FlightPriceFilter/FlightPriceFilter";
import { FlightSort } from "../FlightSort/FlightSort";

import classes from "./Header.module.css";

export const FlightFilter = () => {
  const [showAirline, setShowAirline] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const toggleShowPriceRange = () => setShowPriceRange(!showPriceRange);
  const toggleShowAirLine = () => setShowAirline(!showAirline);
  const toggleShowSort = () => setShowSort(!showSort);
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
      <div className={classes.grow} />
      <FlightSort visible={showSort} handleVisibleChange={toggleShowSort} />
    </div>
  );
};
