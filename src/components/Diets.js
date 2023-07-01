import React, { useState } from 'react'
import Items from './Items'

export default function BestSellers() {
          const [data,setData]=useState([
            {
                key:"1",
                images:"./images/chocochip.jpg",
                title:"RiteBite Max Protein Choco Chip Cookie",
                price:"46 INR",
                sale:"7 Grains Protein Snacks, 55 g",
                desc:"10g Protein || 4g Fiber || Calcium || No Maida"
            },
            {
                key:"2",
                images:"./images/whey2.jpg",
                title:"Pure-Essence Natural Whey",
                price:"3010 INR",
                sale:"Protein Hydrolyzed Isolate & Concentrate Blend For Muscle Mass Growth and Bone strength with Digestive Enzyme",
                desc:"2kg|| Chocolate Flavour|| 95% protein"
            },
            {
                key:"3",
                images:"./images/veganprotein.jpg",
                title:"Pure Nutrition Naturals Vegan Protein",
                price:"1699 INR",
                sale:"Powder With Chocolate Flavour For Men And Women For Good Muscles",
                desc:"Quantity:1kg"
            },
            {
                key:"4",
                images:"./images/proteinatta.jpg",
                title:"Protein Chef High Protein Atta (1 Kg)",
                price:"199 INR",
                sale:"Supergrains Protein Flour with Chickpea Flour, Soy, Chakki Atta ",
                desc:"5.5 gms Protein Per Roti || Good for entire Family || Tastes like regular Multigrain Atta Roti"
            },
            {
                key:"5",
                images:"./images/prochip.jpg",
                title:"RiteBite Max Protein Chips Assorted Pack of 3",
                price:"362 INR",
                sale:"Spanish Tomato-1, Cheese Jalapeno-1, Peri Peri-1",
                desc:"Protein||Fiber||Low GI||Gluten Free||Super Grains like Sorghum, Quinoa, Oats, Ragi||No Preservatives||100% Vegetarian||Quantity-450g(each)"
            },
            {
                key:"6",
                images:"./images/edible.jpg",
                title:"Edible Protein 400 gm(Chocolate)",
                price:"899 INR",
                sale:"Higher Protein in each dose: 50gm Protein",
                desc:"750 Kcal in 200 gm||Contains 21 Vitamins and Minerals||Meets or exceeds 100% of RDA of all micronutrients"
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
