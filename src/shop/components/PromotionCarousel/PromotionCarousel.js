import React from "react";
import { Carousel } from "antd";

import { CarouselItem } from "../CarouselItem/CarouselItem";

export const PromotionCarousel = () => {
  return (
    <Carousel autoplay>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>
  );
};
