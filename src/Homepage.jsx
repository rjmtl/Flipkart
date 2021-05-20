import {Link} from "react-router-dom"
function Homepage() {
    return(
        <div className="App">   <div className="navbar">
        <button className="flipkart_logo"></button>
        <input className="search_bar" placeholder="Search for products, brands and more"></input>
        <button className="login_button">Login</button>
        <button className="cart">Cart</button>
    </div>
    </div>
 
    )
}

export default Homepage;