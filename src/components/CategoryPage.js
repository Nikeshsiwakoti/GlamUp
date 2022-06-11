import React, { useState } from "react";
import Categories from './Categories.js';

const CategoryPage = () => {
    const[data,setData]=useState(Categories);
    const filterResult=(catItem)=>{
        const result = Categories.filter((curData)=>{
           return curData.catergory ===catItem;
        });
        setData(result);
    }
    return (
        <>
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
