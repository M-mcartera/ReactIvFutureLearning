import React, {useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  const [isVisible, setisVisible] = useState(false);

  const showModal = () => {
    setisVisible(true);
  }
  const hideModal = () => {
    setisVisible(false);
  }
  return (
    <React.Fragment>
      {isVisible && <Cart onHideModal={hideModal} />}
      <Header onShowModal={showModal}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
