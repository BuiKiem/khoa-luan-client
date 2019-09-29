import React from "react";
import { Button, Tabs, Icon } from "antd";

import { SearchHotelForm } from "../SearchHotelForm/SearchHotelForm";

import classes from "./SearchBox.module.css";

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
          <Button>Search Flight</Button>
        </TabPane>
      </Tabs>
    </div>
  );
};
