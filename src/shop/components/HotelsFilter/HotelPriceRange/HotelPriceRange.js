import React, { useState } from "react";
import { Row, Col, Slider, InputNumber } from "antd";

const DEFAULT_MIN_VALUE = 0;
const DEFAULT_MAX_VALUE = 10000000;

export const HotelPriceRange = () => {
  const [minValue, setMinValue] = useState(DEFAULT_MIN_VALUE);
  const [maxValue, setMaxValue] = useState(DEFAULT_MAX_VALUE);

  const handleMinValueChange = value => setMinValue(value);

  const handleMaxValueChange = value => setMaxValue(value);

  const handleSliderValueChange = ([min, max]) => {
    setMinValue(min);
    setMaxValue(max);
  };

  return (
    <>
      <Row type="flex" justify="space-between">
        <Col span={12}>
          <InputNumber
            style={{ width: "100%" }}
            formatter={value =>
              `VND ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={value => value.replace(/VND\s?|(,*)/g, "")}
            min={DEFAULT_MIN_VALUE}
            max={DEFAULT_MAX_VALUE}
            value={minValue}
            onChange={handleMinValueChange}
          />
        </Col>
        <Col span={12}>
          <InputNumber
            style={{ width: "100%" }}
            min={DEFAULT_MIN_VALUE}
            formatter={value =>
              `VND ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={value => value.replace(/VND\s?|(,*)/g, "")}
            max={DEFAULT_MAX_VALUE}
            value={maxValue}
            onChange={handleMaxValueChange}
          />
        </Col>
      </Row>
      <Slider
        range
        defaultValue={[DEFAULT_MIN_VALUE, DEFAULT_MAX_VALUE]}
        min={DEFAULT_MIN_VALUE}
        max={DEFAULT_MAX_VALUE}
        onChange={handleSliderValueChange}
        value={[
          typeof minValue === "number" ? minValue : DEFAULT_MIN_VALUE,
          typeof maxValue === "number" ? maxValue : DEFAULT_MAX_VALUE
        ]}
      />
    </>
  );
};
