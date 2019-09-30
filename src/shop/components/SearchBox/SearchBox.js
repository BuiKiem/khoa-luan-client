import React from "react";
import { Tabs, Icon } from "antd";

import { SearchHotelForm } from "../SearchHotelForm/SearchHotelForm";

import classes from "./SearchBox.module.css";
import { SearchFlightForm } from "../SearchFlightForm/SearchFlightForm";

const { TabPane } = Tabs;

export const SearchBox = () => {
  return (
    <div className={classes.searchBoxContainer}>
      <Tabs
        defaultActiveKey="hotel"
        tabPosition="left"
        className={classes.searchBox}
      >
        <TabPane
          tab={
            <span>
              <Icon type="home" />
              Hotel
            </span>
          }
          key="hotel"
        >
          <SearchHotelForm />
        </TabPane>

        <TabPane
          tab={
            <span>
              <Icon type="rocket" />
              Flight
            </span>
          }
          key="flight"
        >
          <SearchFlightForm />
        </TabPane>
      </Tabs>
    </div>
  );
};
