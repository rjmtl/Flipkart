import "./admin.css"

function AdminDisplay(){
let arr=JSON.parse(localStorage["Trial"]);

return(
<>
<h1>Product Listing</h1>
{
    arr.map((value,index)=>
        <div className="Admin_Display">
            <img src={value.image} width="100%" height="100%"/>
            <p>{value.title}</p>
            <p>{value.description}</p>
            <p>{value.price}</p>
        </div>
    )


}
</>
)
}

export default AdminDisplay;