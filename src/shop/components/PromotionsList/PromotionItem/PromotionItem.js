import React from "react";
import { Button, Card, Divider, List, Typography } from "antd";

import classes from "./PromotionItem.module.css";

export const PromotionItem = ({ item }) => {
  return (
    <List.Item>
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        {item.content}
        <div className={classes.itemDate}>
          <Typography.Text strong>
            From {item.startDate} To {item.endDate}
          </Typography.Text>
        </div>
      </Card>
    </List.Item>
  );
};
