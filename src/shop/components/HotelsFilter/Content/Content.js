import React from "react";
import { Collapse } from "antd";

import { PriceRange } from "../../PriceRange/PriceRange";
import { HotelTypeCheckBox } from "../HotelTypeCheckBox/HotelTypeCheckBox";

const { Panel } = Collapse;

export const Content = () => {
  return (
    <Collapse bordered={false} defaultActiveKey={["1"]}>
      <Panel header="Price Range Per Night" key="1">
        <PriceRange />
      </Panel>
      <Panel header="Accommodation Type" key="2">
        <HotelTypeCheckBox />
      </Panel>
    </Collapse>
  );
};
