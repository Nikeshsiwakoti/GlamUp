import React, { useState } from "react";
import SearchBarSection from "./Search/SearchBarSection";

const CategoryPage = () => {
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
{
    id:6,
    title:"Deborah lipmaan",
    price: 1200,
    catergory:"Nail Polish",
    image: "../image/np2.png"
},
{
    id:7,
    title:"laite-Creme Concentre",
    price: 1200,
    catergory:"Moisturizers",
    image: "../image/m2.webp"
},{
    id:8,
    title:"Tender Lipstick - Red",
    price: 310,
    catergory:"Lipstick",
    image: "../image/lips4.jpg"
},
{
    id:9,
    title:"Sun protection cream",
    price: 310,
    catergory:"Skin Care",
    image: "../image/sc1.jpg"
},
{
    id:10,
    title:"Isdin ultralight emulsion",
    price: 310,
    catergory:"Skin Care",
    image: "../image/sc2.webp"
},
{
    id:11,
    title:"Welda moisturizer",
    price: 310,
    catergory:"Moisturizers",
    image: "../image/m3.webp"
},
{
    id:12,
    title:"Olive & June nail polish",
    price: 310,
    catergory:"Nail Polish",
    image: "../image/np3.png"
},
{
    id:13,
    title:"Bio-derma cleanser",
    price: 310,
    catergory:"Cleansers",
    image: "../image/c2.webp"
},
{
    id:14,
    title:"Neutrogena moisturizer",
    price: 310,
    catergory:"Moisturizers",
    image: "../image/m4.webp"
},{
    id:15,
    title:"Peach orange Lipstick",
    price: 310,
    catergory:"Lipstick",
    image: "../image/lips5.jpg"
},
{
    id:16,
    title:"Face cleanser",
    price: 310,
    catergory:"Cleansers",
    image: "../image/c3.webp"
},
{
    id:17,
    title:"Dermalogica cleanser",
    price: 310,
    catergory:"Cleansers",
    image: "../image/c4.webp"
},
{
    id:18,
    title:"Air-whip moisturizer",
    price: 310,
    catergory:"Moisturizers",
    image: "../image/m5.webp"
},
{
    id:19,
    title:"Anthelios-50 cream",
    price: 310,
    catergory:"Skin Care",
    image: "../image/sc3.webp"
},
{
    id:20,
    title:"Blue lizard sunlight cream",
    price: 310,
    catergory:"Skin Care",
    image: "../image/sc4.webp"
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
