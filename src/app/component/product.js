"use client"
import React, { useEffect, useState } from 'react'
import ProductD from './productD';


 async function getData(){
    const res = await fetch("https://fakestoreapi.com/products");

    if(!res.ok){
        throw new Error("Failed to fetch the data")
    }
    return res.json();
 }
const Product = () => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            try{
             const data = await getData();
             setProduct(data)
            }catch(error){
                console.log("error",error)
            }
        }
        fetchData();
},[])
// console.log(product)
  return (
    <div className='mx-4 mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5'>
      {product?.map((item,index) => (
        <ProductD item={item} key={index}/>
      ))}
    </div>
  )
}

export default Product
