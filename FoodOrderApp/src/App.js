import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const [isVisible, setisVisible] = useState(false);

  const showModal = () => {
    setisVisible(true);
  };
  const hideModal = () => {
    setisVisible(false);
  };

  return (
    <CartProvider>
      {isVisible && <Cart onHideModal={hideModal} />}
      <Header onShowModal={showModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
