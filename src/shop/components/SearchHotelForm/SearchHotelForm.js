import React from "react";
import { Button, Col, Form, Input, Row } from "antd";

import classes from "./SearchHotelForm.module.css";
export const SearchHotelForm = () => {
  return (
    <div className={classes.searchFormContainer}>
      <Row gutter={8}>
        <Col span={15}>
          <Form.Item label="City or destination">
            <Input placeholder="Username" />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item label="Guest(s) and Room(s)">
            <Input type="password" placeholder="Password" />
          </Form.Item>
        </Col>
      </Row>

      <Row type="flex" gutter={8} align="bottom">
        <Col span={5}>
          <Form.Item label="Check-in">
            <Input placeholder="Username" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="Duration">
            <Input placeholder="Username" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="Check-out">
            <Input placeholder="Username" />
          </Form.Item>
        </Col>
        <Col span={9} className={classes.searchButton}>
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
