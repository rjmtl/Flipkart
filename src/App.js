import Login from "./Login/login"
import {React, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Items_display from "./items_display"
import Homepage from "./Homepage"
import Item_Details from "./item_details/item_details"
import Cart from "./Cart/cart"

function App() {
  const[isloggedIn,set_isloggedIn]=useState(false);

  return (
    <>
    
      <BrowserRouter>
      <Homepage isloggedIn={isloggedIn} set_isloggedIn={set_isloggedIn} /> 
      <Login set_isloggedIn={set_isloggedIn} />   
        <Switch>
        <Route exact path="/checkout" component={Cart}/>
          <Route exact path="/" component={Items_display} />
          <Route  path="/:id" component={Item_Details}/>
          
           </Switch>
      </BrowserRouter>
  
      
    
      
      
    </>
  );
}

export default App;
