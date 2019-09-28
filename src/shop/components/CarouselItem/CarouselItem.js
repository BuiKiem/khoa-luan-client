import React from "react";

import classes from "./CarouselItem.module.css";
import { Button } from "antd";

export const CarouselItem = () => {
  return (
    <div className={classes.carouselItem}>
      <Button>Detail</Button>
    </div>
  );
};
