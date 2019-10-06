import React from "react";
import PropTypes from "prop-types";
import { Button, Popover } from "antd";

import { PriceRange } from "../../PriceRange/PriceRange";

export const FlightPriceFilter = ({ visible, handleVisibleChange }) => {
  return (
    <Popover
      content={<PriceRange />}
      title="Price Range"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      placement="bottomLeft"
    >
      <Button type="link">Price</Button>
    </Popover>
  );
};

FlightPriceFilter.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisibleChange: PropTypes.func.isRequired
};
