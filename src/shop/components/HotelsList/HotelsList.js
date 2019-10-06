import React from "react";
import { List, Typography } from "antd";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `Hotel ${i}`,
    description: "[Hotel Address]",
    price: "10000000"
  });
}

export const HotelsList = () => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      }}
      dataSource={listData}
      renderItem={item => (
        <List.Item
          style={{
            backgroundColor: "white",
            marginBottom: "10px",
            padding: "10px"
          }}
          key={item.title}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          <Typography.Title level={3}>{`${item.price.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )} VND`}</Typography.Title>
        </List.Item>
      )}
    />
  );
};
