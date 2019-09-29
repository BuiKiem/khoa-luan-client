import React from "react";
import { Button, Tabs, Icon } from "antd";

import classes from "./SearchBox.module.css";

const { TabPane } = Tabs;

export const SearchBox = () => {
  return (
    <div className={classes.searchBoxContainer}>
      <Tabs
        defaultActiveKey="1"
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
          <Button>Search Hotel</Button>
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
