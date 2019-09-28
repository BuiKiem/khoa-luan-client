import React from "react";

import { Header } from "./shop/components/Header/Header";
import { SignUp } from "./shop/components/SignUp/SignUp";
import { useModal } from "./shop/customHook";
import { SignIn } from "./shop/components/SignIn/SignIn";

function App() {
  const [signUpVisible, setSignUpVisible] = useModal(false);
  const [signInVisible, setSignInVisible] = useModal(false);

  const openSignUpModal = () => setSignUpVisible(true);
  const closeSignUpModal = () => setSignUpVisible(false);

  const openSignInModal = () => setSignInVisible(true);
  const closeSignInModal = () => setSignInVisible(false);

  return (
    <div className="App">
      <Header
        openSignUpModal={openSignUpModal}
        openSignInModal={openSignInModal}
      />
      <SignUp visible={signUpVisible} handleClose={closeSignUpModal} />
      <SignIn handleClose={closeSignInModal} visible={signInVisible} />
    </div>
  );
}

export default App;
