import React from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";

import classes from "./SearchHotelForm.module.css";
export const SearchHotelForm = () => {
  return (
    <div className={classes.searchFormContainer}>
      <Row gutter={8}>
        <Col span={15}>
          <Form.Item label="Username">
            <Input placeholder="Username" />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item label="Password">
            <Input type="password" placeholder="Password" />
          </Form.Item>
        </Col>
      </Row>

      <Row type="flex" gutter={8} align="center">
        <Col span={5}>
          <Form.Item label="Username">
            <Input placeholder="Username" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="Username">
            <Input placeholder="Username" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="Username">
            <Input placeholder="Username" />
          </Form.Item>
        </Col>
        <Col span={9} className={classes.searchButton}>
          <Form.Item label="Search" className={classes.transparentLabel}>
            <Button block shape="round">
              SEARCH
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};
