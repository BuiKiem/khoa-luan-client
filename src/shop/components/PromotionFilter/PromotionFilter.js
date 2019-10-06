import React, { useState } from "react";
import { Card, Checkbox, Typography } from "antd";

const options = [
  { label: "Hotel", value: "Hotel" },
  { label: "Flight", value: "Flight" }
];

export const PromotionFilter = () => {
  const [checked, setChecked] = useState([]);

  const handleOnCheck = checkedValues => {
    setChecked(checkedValues);
  };

  return (
    <Card
      title={<Typography.Title level={4}>Applicable for:</Typography.Title>}
    >
      <Checkbox.Group defaultValue={checked} onChange={handleOnCheck}>
        {options.map(option => (
          <Checkbox value={option.value}>{option.label}</Checkbox>
        ))}
      </Checkbox.Group>
    </Card>
  );
};
