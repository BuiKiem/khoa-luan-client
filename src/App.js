import React from "react";
import { Layout } from "antd";

import { Header } from "./shop/components/Header/Header";
import { SignUp } from "./shop/components/SignUp/SignUp";
import { SignIn } from "./shop/components/SignIn/SignIn";
import { HomePage } from "./shop/pages/HomePage/HomePage";

import { useModal } from "./shop/customHook";
import { Switch, Route } from "react-router";
import { HotelsPage } from "./shop/pages/HotelsPage/HotelsPage";
import { FlightsPage } from "./shop/pages/FlightsPage/FlightsPage";
import { PromotionsPage } from "./shop/pages/PromotionsPage/PromotionsPage";

function App() {
  const [signUpVisible, setSignUpVisible] = useModal(false);
  const [signInVisible, setSignInVisible] = useModal(false);

  const openSignUpModal = () => setSignUpVisible(true);
  const closeSignUpModal = () => setSignUpVisible(false);

  const openSignInModal = () => setSignInVisible(true);
  const closeSignInModal = () => setSignInVisible(false);

  return (
    <Layout>
      <Layout.Header>
        <Header
          openSignUpModal={openSignUpModal}
          openSignInModal={openSignInModal}
        />
      </Layout.Header>
      <Layout.Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hotels" component={HotelsPage} />
          <Route exact path="/flights" component={FlightsPage} />
          <Route exact path="/promotions" component={PromotionsPage} />
        </Switch>
      </Layout.Content>

      <Layout.Footer>Footer</Layout.Footer>

      <SignUp visible={signUpVisible} handleClose={closeSignUpModal} />
      <SignIn handleClose={closeSignInModal} visible={signInVisible} />
    </Layout>
  );
}

export default App;
