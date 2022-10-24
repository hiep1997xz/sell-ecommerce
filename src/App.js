import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./common/Cart/Cart";
import Header from "./common/header/Header";
import Data from "./components/Data";
import Pages from "./pages/Pages";

function App() {
  //step 1: fetch data from database
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header cartItem={cartItem}/>
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} cartItem={cartItem} />
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
