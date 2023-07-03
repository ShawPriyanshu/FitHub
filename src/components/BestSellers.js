import React, { useState } from 'react'
import Items from './Items'

export default function BestSellers() {
          const [data,setData]=useState([
            {
                key:"1",
                images:"./images/dumbbells.jpg",
                title:"6 IN 1 ADJUSTABLE DUMBBELLS AND BARBELLS",
                price:"6999 INR",
                sale:"More than 200 customers are buying this product every quarter",
                desc:"Eco-Friendly material plates|| 65 lbs total weight"
            },
            {
                key:"2",
                images:"./images/treadmill.jpg",
                title:"CO-FIT 3205CB HOME TREADMILL",
                price:"35999 INR",
                sale:"More than 150 customers are buying this product every quarter",
                desc:"Light-Weight|| Foldable Design|| 16mph top speed || Heart-Rate monitoring || Shock Absorption|| Incline Function"
            },
            {
                key:"3",
                images:"./images/boxingbag.jpg",
                title:"FitHub EverLast Unfilled Boxing-Bag",
                price:"599 INR",
                sale:"More than 500 customers are buying this product every quarter",
                desc:"3 ft height||Nylon Material||Along with Steel Chain and Hand Wrap||Capacity-200lbs"
            },
            {
                key:"4",
                images:"./images/probar.jpg",
                title:"GetMyMettle ASSORTED PROTEIN BARS(Pack of 6)",
                price:"439 INR",
                sale:"More than 650 cutomers are buying this product every quarter",
                desc:"Varieties of Flavours || 30G-Bar|| Varieties of sizes"
            },
            {
                key:"5",
                images:"./images/whey.jpg",
                title:"GOLD STANDARD 100% WHEY",
                price:"5999 INR",
                sale:"More than 500 customers are buying this product every quarter",
                desc:"5lbs || 79% Protein in every serve|| Zero Added Sugar || Gluten Free|| Only 3gm Carbs per serve"
            },
            {
                key:"6",
                images:"./images/anklets.jpg",
                title:"Ankle Weights,0.9-4.5kg Adjustable Ankle Weights Wrist Straps",
                price:"1524 INR",
                sale:"More than 200 customers are buying this product every quarter",
                desc:"Ideal for Fitness Walking Running Jogging Exercise Gym Workout||Men&Women Kids||2.3kg Each,4.5kg Pair"
            },
          ])
  
    return (
        <div>
            <div className="container pb-5">
            <div className="bestseller row">
              {data.map((element)=>{
                  return (<div className="col-md-4 g-5">
                   <Items images={element.images} title={element.title} key={element.id} desc={element.desc} price={element.price} sale={element.sale} />
               </div>
              )})}  
            
            </div>
            </div>
        </div>
        
    )
}
