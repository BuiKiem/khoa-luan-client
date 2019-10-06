import React from "react";
import { List, Card } from "antd";

import { PromotionItem } from "./PromotionItem/PromotionItem";

const data = [
  {
    content: "Content 1",
    startDate: "01-01-19",
    endDate: "31-01-19"
  },
  {
    content: "Content 2",
    startDate: "01-01-19",
    endDate: "31-01-19"
  },
  {
    content: "Content 3",
    startDate: "01-01-19",
    endDate: "31-01-19"
  },
  {
    content: "Content 4",
    startDate: "01-01-19",
    endDate: "31-01-19"
  }
];

export const PromotionsList = () => {
  return (
    <List
      grid={{ gutter: 8, column: 2 }}
      dataSource={data}
      renderItem={item => <PromotionItem item={item} />}
    />
  );
};
