
import { useEffect, useState } from "react";
import './App.css';
import {Link,withRouter} from "react-router-dom";
import Item_Details from "./item_details/item_details"
var obj = {};
var list;

function Items_display() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetchdata();
    },[]);
   
    const getRandomInt=(min, max)=> {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
     }

     console.log(getRandomInt(1,5));

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
                    }}
                    style={{textDecoration: 'none'}}
                    >
                        
                        <div className="items">
                        
                            <img src={value.image} className="image_display" />
                            
                            <p className="main_display_title">{value.title.slice(0,59)} </p>
                            <p className="main_display_price">{`₹ ${value.price}`}</p>

                        </div>
                        </Link>
                    
                )
            }
        </div>
    )
}

export default withRouter(Items_display);