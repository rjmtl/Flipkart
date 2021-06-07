import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, withRouter } from "react-router-dom";


function Items_display(props) {
  const [item, setItem] = useState();

  useEffect(() => {
    fetchdata();
  }, []);



  const fetchdata = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const items = await data.json();
    setItem(items);

  };
  return (
    <>
    {!item ? (<img src="https://media.giphy.com/media/hWZBZjMMuMl7sWe0x8/giphy.gif" alt="loading" className="loader"/>):(
    <div className="itemList">
      {item.map((value, index) => (
        <Link
          to={{
            pathname: `/products/${index+1}`,
            state: value,
          }}
          style={{ textDecoration: "none" }}
        >
          <div className="items">
            <img src={value.image} className="image_display" />

            <p className="main_display_title">{value.title.slice(0, 59)} </p>
            <p className="main_display_price">{`₹ ${value.price}`}</p>
            <br />
          </div>
        </Link>
      ))}
    </div>

  )};

  </>
  );

}

export default withRouter(Items_display);
