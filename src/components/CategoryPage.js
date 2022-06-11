import React, { useState } from "react";
import axios from "axios";
import SearchBarSection from "./Search/SearchBarSection";
import Navbar from "./Navbar";

const CategoryPage = () => {
    const [product , setProduct] = React.useState([])
  React.useEffect(()=>{
    axios.get('http://localhost:1026/product/get').then((res)=>{
      setProduct(res.data.data)
      console.log(res.data.data)
    }).catch(e=>{
      console.log(e);
    })
  },[])
  const Categories = [{
    id:1,
    title:"Lorem epsum Lipstick",
    price: 2000,
    catergory:"Lipstick",
    image: "../image/lips1.jpg"
},
{
    id:2,
    title:"jin-son nail polish",
    price: 410,
    catergory:"Nail Polish",
    image: "../image/np1.png"
},
{
    id:3,
    title:"Cetaphil cleanser",
    price: 510,
    catergory:"Cleansers",
    image: "../image/c1.webp"
},
{
    id:4,
    title:"e.l.f face cream",
    price: 410,
    catergory:"Moisturizers",
    image: "../image/m1.webp"
},{
    id:5,
    title:"Mock up Lipstick",
    price: 910,
    catergory:"Lipstick",
    image: "../image/lips3.jpg"
},

]
    const[data,setData]=useState(Categories);
    const filterResult=(catItem)=>{
        const result = Categories.filter((curData)=>{
           return curData.catergory ===catItem;
        });
        setData(result);
    }
    return (
        <>
        <Navbar/>
        <SearchBarSection />
            <h1 className="text-center text-info">Let's Glam up</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Lipstick')}>Lipstick</button>
                        <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult('Nail Polish')}>Nail Polish</button>
                        <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult('Moisturizers')}>Moisturizers</button>
                        <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult('Skin Care')}>Skin Care</button>
                        <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult('Cleansers')}>Cleansers</button>
                        <button className="btn btn-warning w-100 mb-4"onClick={()=>setData(Categories)}>All</button>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {data.map((values)=> {
                                const{id,title,price,image}=values;
                                return(
                                    <>
                                    <div className="col-md-4 mb-4" key={id}>
                                <div className="card">
                                    <img className="card-img-top" src={image} alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p>Price : {price}/- </p> 
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button className="btn btn-dark">Buy now</button>
                                    </div>
                                </div>
                            </div></>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoryPage;
