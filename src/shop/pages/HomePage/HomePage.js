import React from "react";

import { PromotionCarousel } from "../../components/PromotionCarousel/PromotionCarousel";
import { SearchBox } from "../../components/SearchBox/SearchBox";

export const HomePage = () => {
  return (
    <div>
      <PromotionCarousel />
      <SearchBox />
    </div>
  );
};
