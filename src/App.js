import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isShown, setIsShown] = useState(false);

  const showCartHandler = () => {
    setIsShown(true);
  };

  const hideCartHandler = () => {
    setIsShown(false);
  };

  return (
    <CartProvider>
      {isShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
