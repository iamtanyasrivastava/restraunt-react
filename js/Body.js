import { useState,useEffect
 } from "react";
import React from 'react'
import '../css/Body.css';


function Body() {
    const[items, setItems]=useState([]);

useEffect(()=>{

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
.then(response=>response.json())
.then(data=>{setItems(data.meals)});


},[])

const itemlist= items.map(item=>{
    return(
        <div  class="body">
            <p>{item.strMeal}</p>
            <img src={item.strMealThumb}/>
            <p>{item.idMeal}</p>
        </div>
    )
})

  return (
    <div className="container">
     {itemlist}
    </div>
  )
}

export default Body;
