
"use client"
import Image from 'next/image'
import Header from './component/header'
import Banner from './component/banner'
import Deals from './component/deals'
import Product from './component/product'
import { useSelector } from 'react-redux'

export default function Home() {
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  return (
    <main className="">
     <Header/> 
     <Banner/>
     <Deals/>
     <Product/>
     
    </main>
  )
}
