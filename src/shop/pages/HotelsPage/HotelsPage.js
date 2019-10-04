import React, { useState } from "react";
import { Row, Col, Button, Typography } from "antd";

import { SearchHotelForm } from "../../components/SearchHotelForm/SearchHotelForm";

import classes from "./HotelsPage.module.css";

export const HotelsPage = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  return (
    <div>
      <Row type="flex" justify="center" className={classes.hotelsPageRow}>
        <Col span={20}>
          <Row>
            <Col span={16}>
              <Typography.Title level={3}>
                Your search result in [Ho Chi Minh City]
              </Typography.Title>
              <Typography.Title level={4} type="secondary">
                [Oct 3, 2019 - Oct 4, 2019]
              </Typography.Title>
            </Col>
            <Col span={8}>
              <Button
                type="secondary"
                block
                size="large"
                onClick={() => setShowSearchForm(!showSearchForm)}
              >
                CHANGE SEARCH
              </Button>
            </Col>
          </Row>
          {showSearchForm && <SearchHotelForm />}
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
