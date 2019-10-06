import React, { useState } from "react";
import { Row, Col } from "antd";

import { HotelsFilter } from "../../components/HotelsFilter/HotelsFilter";
import { HotelsList } from "../../components/HotelsList/HotelsList";
import { SearchDescription } from "../../components/SearchDescription/SearchDescription";

import classes from "./HotelsPage.module.css";
import { HotelsSort } from "../../components/HotelsSort/HotelsSort";
import { SearchHotelForm } from "../../components/SearchHotelForm/SearchHotelForm";

const searchDescriptionData = {
  mainDescription: "Accommodations in [Ho Chi Minh City]",
  subDescriptions: ["[Oct 3, 2019 - Oct 4, 2019]"]
};

export const HotelsPage = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);

  const toggleShowSearchForm = () => setShowSearchForm(!showSearchForm);
  return (
    <div>
      <SearchDescription
        show={showSearchForm}
        toggleShow={toggleShowSearchForm}
        searchForm={<SearchHotelForm />}
        {...searchDescriptionData}
      />

      <Row type="flex" justify="center" className={classes.hotelsPageRow}>
        <Col span={6} className={classes.filterContainer}>
          <div>
            <HotelsSort />
            <HotelsFilter />
          </div>
        </Col>
        <Col span={14} className={classes.hotelsListContainer}>
          <div>
            <HotelsList />
          </div>
        </Col>
      </Row>
    </div>
  );
};
