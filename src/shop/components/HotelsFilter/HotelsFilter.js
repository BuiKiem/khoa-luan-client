import React from "react";
import { Card } from "antd";

import { Title } from "./Title/Title";
import { Content } from "./Content/Content";

const nonPaddingStyle = {
  padding: "0"
};

export const HotelsFilter = () => {
  return (
    <div>
      <Card title={<Title />} bodyStyle={nonPaddingStyle}>
        <Content />
      </Card>
    </div>
  );
};
