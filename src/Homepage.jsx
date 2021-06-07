import { withRouter } from "react-router-dom";
import "./Login/login.css";
import { useEffect, useState } from "react";

function Homepage({ isloggedIn, set_isloggedIn, cart_display_counter, history }) {
  return (

    <div className="App">
      <div className="navbar">
        <button className="flipkart_logo" onClick={()=>{history.push("/")}}></button>
        <input
          className="search_bar"
          placeholder="Search for products, brands and more"
        ></input>
        {localStorage.isloggedIn ? (
          <button
            className="login_button"
            name="logout"
            onClick={() => {
              localStorage.removeItem("CurrentUser");
              localStorage.removeItem("CurrentEmail");
              localStorage.removeItem("isloggedIn")
              set_isloggedIn(true);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="login_button"
            name="login"
            onClick={() => {
              document.querySelector(".login").classList.add("visible");
              document.querySelector("body").classList.toggle("modal-open");
            }}
          >
            Login
          </button>
        )}

        <div className="cart_value_display">{cart_display_counter}</div>


        <button
          onClick={() => {
            history.push("/checkout");
          }}
          className="cart"
        >
          🛒 Cart
        </button>
      </div>
    </div>
  );
}

export default withRouter(Homepage);
