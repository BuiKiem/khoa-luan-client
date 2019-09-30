import React from "react";
import {
  Button,
  Col,
  Form,
  Row,
  DatePicker,
  InputNumber,
  Select,
  Radio
} from "antd";

import classes from "./SearchFlightForm.module.css";

export const SearchFlightForm = () => {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };
  return (
    <div className={classes.searchFormContainer}>
      <Row gutter={8}>
        <Col span={9}>
          <Form.Item label="From">
            <Select
              style={{ width: "100%" }}
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="tom">Tom</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item label="To">
            <Select
              style={{ width: "100%" }}
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="tom">Tom</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Adult (>12)">
            <InputNumber min={1} max={5} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Child (<=12)">
            <InputNumber min={1} max={5} />
          </Form.Item>
        </Col>
      </Row>

      <Row type="flex" gutter={8} align="bottom">
        <Col span={5}>
          <Form.Item>
            <Radio.Group>
              <Radio style={radioStyle} value={1}>
                One way
              </Radio>
              <Radio style={radioStyle} value={2}>
                Round trip
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Departure Date">
            <DatePicker />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Return Date">
            <DatePicker />
          </Form.Item>
        </Col>

        <Col span={7}>
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
