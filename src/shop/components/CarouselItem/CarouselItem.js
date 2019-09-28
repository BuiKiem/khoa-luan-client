import React from "react";
import { Button } from "antd";

import classes from "./CarouselItem.module.css";

export const CarouselItem = () => {
  return (
    <div className={classes.carouselItem}>
      <Button className={classes.alignBottom} type="default" size="large">
        Detail
      </Button>
    </div>
  );
};
