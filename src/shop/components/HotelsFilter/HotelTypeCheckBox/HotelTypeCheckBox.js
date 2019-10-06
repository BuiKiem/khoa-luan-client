import React, { useState } from "react";

import { Checkbox, Row, Col } from "antd";

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
  { label: "Banana", value: "Banana" }
];

export const HotelTypeCheckBox = () => {
  const [checked, setChecked] = useState([]);

  const handleOnCheck = checkedValues => {
    setChecked(checkedValues);
  };

  return (
    <Checkbox.Group defaultValue={checked} onChange={handleOnCheck}>
      <Row>
        {options.map(option => (
          <Col span={12} key={option.value}>
            <Checkbox value={option.value}>{option.label}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
};
