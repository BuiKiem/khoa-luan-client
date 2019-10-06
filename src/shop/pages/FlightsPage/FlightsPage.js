import React, { useState } from "react";
import { Button, Col, Row, Tabs } from "antd";

import { FlightList } from "../../components/FlightList/FlightList";
import { SearchDescription } from "../../components/SearchDescription/SearchDescription";
import { SearchFlightForm } from "../../components/SearchFlightForm/SearchFlightForm";

const { TabPane } = Tabs;

const searchDescriptionData = {
  mainDescription:
    "Hanoi (HAN)-Noibai International Airport ⇆ Ho Chi Minh City (SGN)-Tansonnhat Intl",
  subDescriptions: [
    "Saturday, 05 October 2019 - Monday, 07 October 2019",
    "1 Adult | Economy"
  ]
};

export const FlightsPage = () => {
  const [isOneWay, setIsOneWay] = useState(true);
  const [showSearchForm, setShowSearchForm] = useState(false);

  const toggleIsOneWay = () => setIsOneWay(!isOneWay);
  const toggleShowSearchForm = () => setShowSearchForm(!showSearchForm);

  const flightList = isOneWay ? (
    <FlightList />
  ) : (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Departure Flight" key="1">
        <h1>Departure</h1>
        <FlightList />
      </TabPane>
      <TabPane tab="Arrival Flight" key="2">
        <h1>Arrival</h1>
        <FlightList />
      </TabPane>
    </Tabs>
  );
  return (
    <div>
      <SearchDescription
        show={showSearchForm}
        toggleShow={toggleShowSearchForm}
        searchForm={<SearchFlightForm />}
        {...searchDescriptionData}
      />

      <Button onClick={toggleIsOneWay}>TOGGLE</Button>

      <Row type="flex" justify="center">
        <Col span={20}>{flightList}</Col>
      </Row>
    </div>
  );
};
