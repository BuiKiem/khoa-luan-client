import React from "react";
import { Button, Popover, Radio } from "antd";
import PropTypes from "prop-types";

import classes from "./FlightSort.module.css";

export const FlightSort = ({ visible, handleVisibleChange }) => {
  const content = (
    <Radio.Group>
      <Radio className={classes.verticalRadio} value={1}>
        Highest Price
      </Radio>
      <Radio className={classes.verticalRadio} value={2}>
        Lowest Price
      </Radio>
      <Radio className={classes.verticalRadio} value={3}>
        Earliest Departure
      </Radio>
      <Radio className={classes.verticalRadio} value={4}>
        Latest Departure
      </Radio>
      <Radio className={classes.verticalRadio} value={5}>
        Earliest Arrival
      </Radio>
      <Radio className={classes.verticalRadio} value={6}>
        Latest Arrival
      </Radio>
      <Radio className={classes.verticalRadio} value={7}>
        Shortest Duration
      </Radio>
    </Radio.Group>
  );
  return (
    <Popover
      content={content}
      title="Sort By"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      placement="bottomRight"
    >
      <Button type="link">Sort By</Button>
    </Popover>
  );
};

FlightSort.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisibleChange: PropTypes.func.isRequired
};
