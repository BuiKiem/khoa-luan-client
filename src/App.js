import React from "react";

import { Header } from "./shop/components/Header/Header";
import { SignUp } from "./shop/components/SignUp/SignUp";
import { useModal } from "./shop/customHook";

function App() {
  const [signUpVisible, setSignUpVisible] = useModal(false);

  const openSignUpModal = () => setSignUpVisible(true);
  const closeSignUpModal = () => setSignUpVisible(false);

  return (
    <div className="App">
      <Header openSignUpModal={openSignUpModal} />
      <SignUp visible={signUpVisible} handleClose={closeSignUpModal} />
    </div>
  );
}

export default App;
