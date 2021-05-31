import "./cart.css";
import {useState,useEffect} from "react";

function Cart() {
    var sum=0;
    var cart = JSON.parse(localStorage.getItem("Cart"));
    const[cart_data,setcart]=useState([]);
    
     for(let i=0;i<cart_data.length;i++){ //price calculator
        var p=cart_data[i];
        let{price,cart_counter}=p;
        let total=price*cart_counter;
        sum=sum+total;
        console.log(sum);

    }

    const remove_handle=(index)=>{
        cart.splice(index,1);
        localStorage.setItem("Cart",JSON.stringify(cart));
        setcart(cart);
    }

    const increment_counter=(index)=>{
        cart[index]["cart_counter"]++;
        localStorage.setItem("Cart",JSON.stringify(cart));
        setcart(cart);  
    }

    const decrement_counter=(index)=>{
        cart[index]["cart_counter"]--;
        localStorage.setItem("Cart",JSON.stringify(cart));
        setcart(cart);   
    }

    useEffect(()=>{
        var arr=JSON.parse(localStorage.getItem("Cart"));
        setcart(arr);
    },[]);

    return (
        <>
            <div className="main">
                <div className="cart_div">
                    <div className="my_cart">
                        <span>{`My cart (${cart_data.length})`}</span>
                    </div>
                    <br />
                    <hr className="hr" />

                    {cart_data.map((value, index) =>
                        <>
                        
                            <div className="cart_display" >
                                <div className="cart_image">
                                    <img className="cart_image_display" src={value.image}></img>
                                    <div className="counter_div" >
                                        <button className="counter" onClick={()=>{decrement_counter(index)}}>-</button>
                                        <button className="counter_display" >{value.cart_counter}</button>
                                        <button className="counter" onClick={()=>{increment_counter(index)}}>+</button>
                                    </div>

                                </div>
                                <div className="cart_details">
                                    <p className="display_details">{value.title}</p>
                                    <p className="display_details">Seller</p>
                                    <p className="display_details_price">{`₹ ${value.price}`}</p>
                                    <button className="remove_button" onClick={()=>{remove_handle(index)}}>REMOVE</button>
                                </div>

                            </div>
                            <hr className="hr" />
                        </>
                    )}



                </div>
                <div className="price">
                    <span className="cart_price_title">PRICE DETAILS</span>
                    <div className="price_card">
                        <br/>
                        <span className="price_item">{`Price (${cart_data.length} item)`}</span>
                        <span className="total_price">{`₹ ${sum.toString().slice(0,6)}`}</span>
                        <br/>
                    </div>
                    <br/>
                    <div>
                        <span className="price_item">Delivery Charges</span>
                        <span className="total_delivery">FREE</span>
                        <br/>
                        <br/>
                    
                        <span className="price_item">------------------------------------------------</span>
                        <br/>
                        <br/>
                
                        <span className="final_price">Total</span>
                        <span className="price_total">{`₹ ${sum.toString().slice(0,6)}`}</span>
                    </div>

                </div>

            </div>

        </>
    )
}


export default Cart;