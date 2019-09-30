import React from "react";
import { Button, Col, Form, Input, Row, DatePicker, InputNumber } from "antd";

import { CustomAutoComplete } from "../CustomAutoComplete/CustomAutoComplete";

import classes from "./SearchHotelForm.module.css";
export const SearchHotelForm = () => {
  return (
    <div className={classes.searchFormContainer}>
      <Row gutter={8}>
        <Col span={18}>
          <Form.Item label="City or destination">
            <CustomAutoComplete />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Guest(s)">
            <InputNumber min={1} max={15} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Room(s)">
            <InputNumber min={1} max={15} />
          </Form.Item>
        </Col>
      </Row>

      <Row type="flex" gutter={8} align="bottom">
        <Col span={10}>
          <Form.Item label="Check-in & Check-out">
            <DatePicker.RangePicker />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Duration">
            <label>7 days</label>
          </Form.Item>
        </Col>
        <Col span={10} className={classes.searchButton}>
          <Form.Item>
            <Button type="primary" block shape="round" icon="search">
              SEARCH
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};
