import { useState, useEffect } from "react";
import "./admin.css";

function Admin(props) {
  var temp_arr = [];
  if (localStorage["Trial"]) {
    temp_arr = JSON.parse(localStorage["Trial"]);
  }

  const [currentItem, setCurrentItem] = useState();
  const [item, setItem] = useState(temp_arr);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const submithandle = (e) => {
    e.preventDefault();
    var data = {
      title: name,
      price,
      image,
      description: desc,
    };
    setItem([...item, data]);
    alert("Item Added Successfully");
    document.querySelector(".main_product").classList.remove('visible');
    setImage("");
    setName("");
    setPrice("");
    setDesc("");
  };

  useEffect(() => {
    localStorage.setItem("Trial", JSON.stringify(item));
    console.log("running");
    console.log(temp_arr);
  }, [item]);
  useEffect(() => {
    if(!localStorage["isAdminLoggedIn"]){
      props.history.push("/admin_login")
    }
    document.querySelector(".login_cart").classList.add("hidden")
  }, [])

  const image_handle = (e) => {
    var image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      image = reader.result;
      setImage(image);
    };
  };
  return (
    <>
      <div className="button_main">
        <div className="buttons">
          <button className="main_buttons" onClick={()=>document.querySelector(".main_product").classList.add('visible')}>Add Products</button>
          <button className="main_buttons" onClick={() => props.history.push("/admin_product_listing")}>
          View Products
        </button>


        </div>
      </div>
<div className="main_product">
  <br/>
  <span className="close" onClick={()=>{
document.querySelector(".main_product").classList.remove('visible');
  }}>x</span>
      <form
        className="add_product"
        onSubmit={(e) => {
          submithandle(e);
        }}
      >
        <label className="label">Product Title</label>
        <br/>
        <input
          className="product_prop"
          // placeholder="Name of Product"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label className="label">Price</label>
        <br/>
        <input
          className="product_prop"
          // placeholder="Price in INR"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label className="label">Description</label>
        <br/>
        <input
          className="product_prop"
          // placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <label className="label">Product Image</label>
        <br/>
        <input
          type="file"
          className="product_prop"
          accept="image/gif, image/jpeg, image/png"
          name="image"
          id="file"
          onChange={(e) => image_handle(e)}
        />
        <br />
        <button className="button" type="submit">Add Product</button>

      </form>
      </div>
    </>
  );
}

export default Admin;
