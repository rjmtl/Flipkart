import React,{useState,useEffect} from "react";
import {withRouter} from "react-router-dom"
import "./item_details.css"

function Item_Details(props) {
    console.log("Item Details props",props);
    
    const [inCart,setInCart]=useState(false);
    const [currentItem,Set_currentItem]=useState([]);

    const cart_submitHandle=()=>{
        
        var temp_product=props.location.state;
        temp_product.cart_counter=1;
        console.log(temp_product);
        let tempCart=JSON.parse(localStorage.Cart);
        tempCart.push(temp_product);
        localStorage.setItem("Cart",JSON.stringify(tempCart));
        props.history.push("/checkout");
        // Set_currentItem([...currentItem,temp_product])
        

        
        
    }
    
   
    useEffect(() => {
    Set_currentItem(JSON.parse(localStorage["Cart"]));
    
        var temp_arr=props.location.state;
        let cart=JSON.parse(localStorage["Cart"])
        for(let i=0;i<cart.length;i++){
            let temp=cart[i];
            console.log("crt",temp.id)
            console.log("match",temp_arr.id)
            if(temp.id===temp_arr.id){
                setInCart(true);
                break;
            }
        }
}, []);

    useEffect(() => {
        console.log("State CArt",currentItem);
         localStorage.setItem("Cart",JSON.stringify(currentItem));     
         
    }, [currentItem]);

     let temp = props.location.state;
    return (
        <>  <div className="product">
                <div className="product_details">
                        <p className="detail_title">{temp.title}</p>
                    <span className="price_detail">Special Price</span>
                    <br />
                        <span className="price_title">{`₹ ${temp.price}`}</span>
                    <br />
                    <br />
                    <br />
                    <span className="description_title">Description</span>
                    <br />
                        <p className="description_detail">{temp.description}</p>
                

                </div>
                <img src={temp.image} className="img" />

            </div>
            <div className="button_panel">

            {inCart ? (<button className="button_design"  id="go_to_cart" onClick={()=>{props.history.push("/checkout")}}>Go to Cart</button>) : (
                <button className="button_design" id="add_to_cart" onClick={cart_submitHandle}>🛒 Add to Cart</button>  
            )}

            <button className="button_design" id="buy_now">⚡ Buy Now </button>
            </div>

        </>
    );
}

export default withRouter(Item_Details);