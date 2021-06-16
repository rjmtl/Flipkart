import { withRouter } from "react-router-dom";
import "./Login/login.css";

function Homepage({
  isloggedIn,
  set_isloggedIn,
  search,
  Setsearch,
  cart_display_counter,
  history,
  flag,
})
useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [input])
 {
  return (
    <div className="App">
      <div className="navbar">
        <button
          className="flipkart_logo"
          onClick={() => {
            history.push("/");
          }}
        ></button>

          <input
            name="search"
            className="search_bar"
            placeholder="Search for products, brands and more"
            value={search}
            onChange={(e) => Setsearch(e.target.value)}
          ></input>
<div className="login_cart">
          {isloggedIn ? (
            <button
              className="login_button"
              name="logout"
              onClick={() => {
                localStorage.removeItem("CurrentUser");
                localStorage.removeItem("CurrentEmail");
                localStorage.removeItem("isloggedIn");
                set_isloggedIn(false);
                alert("Logged Off");
                history.push("/");
                flag = true;
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
    </div>
  );
}

export default withRouter(Homepage);
