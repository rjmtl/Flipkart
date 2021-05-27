import { useContext } from "react";
import "./Login/login.css";

function Homepage() {

    return (
        <div className="App">   <div className="navbar">
            <button className="flipkart_logo"></button>
            <input className="search_bar" placeholder="Search for products, brands and more"></input>
            <button className="login_button"
                onClick={() => {
                    document.querySelector(".login").classList.add('visible');
                    document.querySelector('body').classList.toggle('modal-open');
                    // document.querySelector('.inner_signup_panel').classList.remove('hidden');
                    // document.querySelector('.inner_login_panel').classList.remove('visible');
                    // document.querySelector('.signup_visible').classList.remove('hidden');
                    // document.querySelector('.login_visible').classList.remove('visible');
                }}

            >Login
        </button>
            <button className="cart">Cart</button>
            
            {/* <span className="user_name">{localStorage.CurrentUser}</span> */}

     

    </div>
        </div>

    )
}

export default Homepage;