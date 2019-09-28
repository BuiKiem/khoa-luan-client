import React from "react";
import { Button, Carousel, Col, Icon, Row } from "antd";

import { CarouselItem } from "../CarouselItem/CarouselItem";

import classes from "./PromotionCarousel.module.css";

export const PromotionCarousel = () => {
  let carousel = React.createRef();
  const next = () => carousel.next();
  const previous = () => carousel.prev();

  return (
    <Row className={classes.carouselContainer}>
      <Col span={1} className={classes.carouselController}>
        <Button size="large" onClick={previous}>
          <Icon type="left" />
        </Button>
      </Col>
      <Col span={22}>
        <Carousel ref={node => (carousel = node)} autoplay>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Col>
      <Col span={1} className={classes.carouselController}>
        <Button size="large" onClick={next}>
          <Icon type="right" />
        </Button>
      </Col>
    </Row>
  );
};
