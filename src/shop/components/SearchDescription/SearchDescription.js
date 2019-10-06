import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row, Typography } from "antd";

import classes from "./SearchDescription.module.css";

export const SearchDescription = ({
  show,
  toggleShow,
  mainDescription,
  subDescriptions,
  searchForm
}) => {
  return (
    <Row
      type="flex"
      justify="center"
      className={classes.searchDescriptionContainer}
    >
      <Col span={20}>
        <Row>
          <Col span={16}>
            <Typography.Title level={4}>{mainDescription}</Typography.Title>

            {subDescriptions.map(description => (
              <Typography.Paragraph strong type="secondary">
                {description}
              </Typography.Paragraph>
            ))}
          </Col>
          <Col span={8}>
            <Button type="secondary" block size="large" onClick={toggleShow}>
              CHANGE SEARCH
            </Button>
          </Col>
        </Row>
        {show && searchForm}
      </Col>
    </Row>
  );
};

SearchDescription.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
  mainDescription: PropTypes.string.isRequired,
  subDescriptions: PropTypes.arrayOf(PropTypes.string),
  searchForm: PropTypes.node.isRequired
};

SearchDescription.defaultProps = {
  subDescriptions: []
};
