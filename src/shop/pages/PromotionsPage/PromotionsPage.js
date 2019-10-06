import React from "react";
import classes from "../HotelsPage/HotelsPage.module.css";
import { Col, Row } from "antd";

import { HotelsList } from "../../components/HotelsList/HotelsList";
import { PromotionFilter } from "../../components/PromotionFilter/PromotionFilter";

export const PromotionsPage = () => {
  return (
    <Row type="flex" justify="center" className={classes.hotelsPageRow}>
      <Col span={6} className={classes.filterContainer}>
        <div>
          <PromotionFilter />
        </div>
      </Col>
      <Col span={14} className={classes.hotelsListContainer}>
        <div>
          <HotelsList />
        </div>
      </Col>
    </Row>
  );
};
