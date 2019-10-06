import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Button, Checkbox, Col, Popover, Row } from "antd";

import classes from "./AirLine.module.css";

const options = [
  { label: "Jetstar", value: "Jetstar" },
  { label: "VietJet Air", value: "VietJet Air" },
  { label: "VietNam AirLines", value: "VietNamAirLines" }
];

export const AirLineFilter = ({ visible, handleVisibleChange }) => {
  const [checked, setChecked] = useState("");
  const handleOnCheck = checkedValues => setChecked(checkedValues);
  const content = (
    <Checkbox.Group
      defaultValue={checked}
      onChange={handleOnCheck}
      className={classes.airLineContainer}
    >
      <Row>
        {options.map(option => (
          <Col span={24} key={option.value} className={classes.airLine}>
            <Checkbox value={option.value}>{option.label}</Checkbox>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );

  return (
    <Popover
      content={content}
      title="Airline"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      placement="bottomLeft"
    >
      <Button type="link">Airline</Button>
    </Popover>
  );
};

AirLineFilter.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisibleChange: PropTypes.func.isRequired
};
