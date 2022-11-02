import { useState } from "react";

import CartProvider from "./store/CartProvider";
import Header from "./Layout/Header";
import Foods from "./Components/foods/Foods";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Foods />
      </main>
    </CartProvider>
  );
}

export default App;
