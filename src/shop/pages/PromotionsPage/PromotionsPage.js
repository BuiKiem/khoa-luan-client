import React from "react";
import { Col, Row } from "antd";

import { PromotionFilter } from "../../components/PromotionFilter/PromotionFilter";
import { PromotionsList } from "../../components/PromotionsList/PromotionsList";

import classes from "./PromotionsPage.module.css";

export const PromotionsPage = () => {
  return (
    <Row type="flex" justify="center" className={classes.pageRow}>
      <Col span={6} className={classes.filterContainer}>
        <div>
          <PromotionFilter />
        </div>
      </Col>
      <Col span={14} className={classes.listContainer}>
        <div>
          <PromotionsList />
        </div>
      </Col>
    </Row>
  );
};
