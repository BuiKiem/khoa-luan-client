import React from "react";
import { List, Card } from "antd";

const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  }
];

export const PromotionsList = () => {
  return (
    <List
      grid={{ gutter: 8, column: 2 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>Card Content</Card>
        </List.Item>
      )}
    />
  );
};
