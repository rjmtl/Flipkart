
import { useEffect, useState } from "react";
import './App.css';
import {Link} from "react-router-dom";
import Item_Details from "./item_details"
var obj = {};
var list;

function Items_display() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetchdata();
    });
   
    const fetchdata = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const items = await data.json();
        setItem(items);
    }
    return (
        <div className="itemList">
            {
                item.map((value, index) =>
                    
                    <Link to={{
                     pathname:`/products/${index}`,
                     state: value   
                    }}>
                        
                        <div className="items">
                        
                            <img src={value.image} className="image_display" />
                            <p>{value.title} </p>

                        </div>
                        </Link>
                    
                )
            }
        </div>
    )
}

export default Items_display;