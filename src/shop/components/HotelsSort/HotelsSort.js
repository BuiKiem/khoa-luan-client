import React from "react";
import { Card, Radio } from "antd";

import classes from "./HotelsSort.module.css";

export const HotelsSort = () => {
  return (
    <div>
      <Card title="Sort result by: " className={classes.hotelsSortCard}>
        <Radio.Group>
          <Radio value={1}>Highest Price</Radio>
          <Radio value={2}>Lowest Price</Radio>
        </Radio.Group>
      </Card>
    </div>
  );
};
