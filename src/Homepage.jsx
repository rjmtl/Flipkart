import { withRouter } from "react-router-dom";
import "./Login/login.css";
import {useEffect, useState} from "react"
function Homepage({isloggedIn,set_isloggedIn,history}) {
    

    
    
    return (
        <div className="App">   <div className="navbar">
            <button className="flipkart_logo"></button>
            <input className="search_bar" placeholder="Search for products, brands and more"></input>
           { isloggedIn ? (<button className="login_button" onClick={()=>{
               localStorage.removeItem("CurrentUser");
               set_isloggedIn(false);
            }}
            >Logout
        </button>) : (<button className="login_button"
                onClick={() => {
                    document.querySelector(".login").classList.add('visible');
                    document.querySelector('body').classList.toggle('modal-open');
                }}

            >Login
        </button>)
           }<img ></img> <button onClick={()=>{history.push("/checkout")}} className="cart">Cart</button>
    </div>
        </div>

    )
}

export default withRouter(Homepage);