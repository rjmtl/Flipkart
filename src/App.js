import Login from "./Login/login";
import { React, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Items_display from "./items_display";
import Homepage from "./Homepage";
import Item_Details from "./item_details/item_details";
import Cart from "./Cart/cart";

function App() {
  let id;
  var sum=0;
  var flag = false;
  if (!localStorage[localStorage.CurrentEmail]) {
    flag = true;
  }
  const [cart_display_counter, setter] = useState(sum);
  const [isloggedIn, set_isloggedIn] = useState(flag);
  if (localStorage[localStorage.CurrentEmail]) {
    var temp_arr = JSON.parse(localStorage[localStorage.CurrentEmail]);
    for (let i = 0; i < temp_arr.length; i++) {
      let { cart_counter } = temp_arr[i];
      sum = sum + cart_counter;
    }
  }
  useEffect(() => {
    setter(sum);
  }, flag);

  return (
    <>
      <BrowserRouter>
        <Homepage
          isloggedIn={isloggedIn}
          set_isloggedIn={set_isloggedIn}
          cart_display_counter={cart_display_counter}
        />
        <Login set_isloggedIn={set_isloggedIn} />


        <Switch>
          <Route exact path="/checkout">
          <Cart cart_display_counter={cart_display_counter} setter={setter} final={sum} />
          </Route>
          {/* <Route exact path={`/products/:${id}`} id={id}  component={Product_Render} /> */}
          <Route exact path="/" component={Items_display} />
          <Route exact path="/products/:id" component={Item_Details} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
