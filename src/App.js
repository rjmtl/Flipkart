import Login from "./Login/login"
import {React} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Items_display from "./items_display"
import Homepage from "./Homepage"
import Item_Details from "./item_details/item_details"

function App() {
  

  return (
    <>
    
      <BrowserRouter>
      <Homepage/> 
      <Login />   
        <Switch>
          <Route exact path="/" component={Items_display} />
          <Route path="/:id" component={Item_Details}/>
           </Switch>
      </BrowserRouter>
  
      
    
      
      
    </>
  );
}

export default App;
