import {useState,useEffect} from "react";

function Item_Details(match){    
let temp=match.location.state;
console.log(temp);
    
return(  
<div>
    <h1>{temp.title}</h1>
    <img src={temp.image} width="20%" height="10%"/>

</div>
) 
}

export default Item_Details;