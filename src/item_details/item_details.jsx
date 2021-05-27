import React from "react";
import Homepage from "../Homepage"

export const Context = React.createContext()
function Item_Details(location) {

    let temp = location.location.state;
    return (
        <>


            <div className="product">
                <div className="product_details">
                    {
                        <p className="detail_title">{temp.title}</p>

                    }
                    <span className="price_detail">Special Price</span>
                    <br />
                    {
                        <span className="price_title">{`₹ ${temp.price}`}</span>
                    }
                    <br />
                    {/* <span className="offers">Available Offers</span> */}
                    <br />
                    <br />
                    <span className="description_title">Description</span>
                    <br />
                    {
                        <p className="description_detail">{temp.description}</p>
                    }

                </div>

                <img src={temp.image} className="img" />

            </div>
            <div className="button_panel">
                <button className="button_design" id="add_to_cart">🛒 Add to Cart</button>
                <button className="button_design" id="buy_now">⚡ Buy Now </button>


            </div>

        </>
    )
}

export default Item_Details;