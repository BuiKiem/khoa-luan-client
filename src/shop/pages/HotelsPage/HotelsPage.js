import React from "react";
import { Row, Col, Button } from "antd";

import classes from "./HotelsPage.module.css";

export const HotelsPage = () => {
  return (
    <div>
      <Row type="flex" justify="center" className={classes.hotelsPageRow}>
        <Col span={20}>
          <div style={{ backgroundColor: "white" }}>
            <h1>SearchBox</h1>
          </div>
        </Col>
      </Row>

      <Row type="flex" justify="center" className={classes.hotelsPageRow}>
        <Col span={6} className={classes.filterContainer}>
          <div style={{ backgroundColor: "white" }}>
            <h1>Filter</h1>
          </div>
        </Col>
        <Col span={14} className={classes.hotelsListContainer}>
          <div style={{ backgroundColor: "white" }}>
            <h1>List</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};
