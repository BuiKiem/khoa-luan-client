import React, { useState } from "react";
import { Col, Row } from "antd";

import { FlightList } from "../../components/FlightList/FlightList";
import { SearchDescription } from "../../components/SearchDescription/SearchDescription";
import { SearchFlightForm } from "../../components/SearchFlightForm/SearchFlightForm";

const searchDescriptionData = {
  mainDescription:
    "Hanoi (HAN)-Noibai International Airport ⇆ Ho Chi Minh City (SGN)-Tansonnhat Intl",
  subDescriptions: [
    "Saturday, 05 October 2019 - Monday, 07 October 2019",
    "1 Adult | Economy"
  ]
};

export const FlightsPage = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);

  const toggleShowSearchForm = () => setShowSearchForm(!showSearchForm);
  return (
    <div>
      <SearchDescription
        show={showSearchForm}
        toggleShow={toggleShowSearchForm}
        searchForm={<SearchFlightForm />}
        {...searchDescriptionData}
      />

      <Row type="flex" justify="center">
        <Col span={20}>
          <FlightList />
        </Col>
      </Row>
    </div>
  );
};
