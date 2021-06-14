import { useState, useEffect } from "react";

function Admin(props) {
var temp_arr=[];
    if(localStorage["Trial"]){
  temp_arr = JSON.parse(localStorage["Trial"]);
    }

   const[currentItem,setCurrentItem]=useState();
  const [item, setItem] = useState(temp_arr);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");



  const submithandle=(e)=> {
    e.preventDefault();
    var data = {
      title:name,
      price,
      image,
      description:desc,
    };

    setItem([...item,data]);

  };

  useEffect(() => {
    localStorage.setItem("Trial", JSON.stringify(item));
    console.log("running");
    console.log(temp_arr);
  }, [item]);

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
      <h1>Add products</h1>
      <form onSubmit={(e)=>{submithandle(e)}}>
        <input
          placeholder="Name of Product"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="Price in INR"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <input
          type="file"
          accept="image/gif, image/jpeg, image/png"
          name="image"
          id="file"
          onChange={(e) => image_handle(e)}
        />
        <br />
        <button type="submit">Add Product</button>
        <button onClick={()=>props.history.push("/admin_product_listing")}>View Products</button>
      </form>
    </>
  );
}

export default Admin;
