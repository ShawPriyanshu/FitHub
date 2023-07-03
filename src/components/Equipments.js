import React, { useState } from 'react'
import Items from './Items'

export default function Equipments() {
          const [data,setData]=useState([
            {
                key:"1",
                images:require("./../images/peddlar.jpg"),
                title:"Sparnod Fitness SMB-100 Mini Cycle Pedal Exerciser",
                price:"1699 INR",
                sale:"Easy to Use || Portable and Easy to Fold",
                desc:"Adjustable Resistance || Digital Display || Suitable for Light Exercise of Legs & Arms, and Physiotherapy at Home"
            },
            {
                key:"2",
                images:require("./../images/parbar.jpg"),
                title:"Single Parallel Bars,multifunctional Indoor Fitness Equipment Horizontal Bar",
                
                price:"29999 INR",
                sale:" Suitable for Different People, Adults and Children Can Use",
                desc:"Weight: 50-54kg(11 Lbs) || Made of 30*60*1.2mm Steel and Bears 150kgs|| Adjustable Height 165cm-210cm"
            },
            {
                key:"3",
                images:require("./../images/tot.jpg"),
                title:"Total Gym APEX",
                
                price:"55999 INR",
                sale:"Total Body Strength Training Fitness Equipment with 6, 8, or 10 Levels of Resistance and Attachments",
                desc:"Dimension:56 x 19 x 10 inches||Weight:87lbs||Material:Alloy Steel"
            },
            {
                key:"4",
                images:require("./../images/pullup.jpg"),
                title:"ONETWOFIT Wall Mounted Pull Up Bar",
                
                price:"2999 INR",
                sale:"2 in 1 Pull Up and Dip Bar",
                desc:"Station Space Saving || Multifunctional Wall Mount Chin Up Bar||Support up to 330LBS"
            },
            {
                key:"5",
                images:require("./../images/leeway.jpg"),
                title:"LEEWAY LAT and Lift Pulley System",
                
                price:"2999 INR",
                sale:"Cable Machine with Loading Pin for Home Gym, Fitness Workout",
                desc:"Pull Down for Exercise Your Triceps||Biceps Curl||Back|| Forearm||Shoulder (Black)"
            },
            {
                key:"6",
                images:require("./../images/anklets.jpg"),
                title:"Ankle Weights of 0.9-4.5kg Adjustable Ankle Weights Wrist Straps",
                price:"1524 INR",
                sale:"",
                desc:"Ideal for Fitness Walking Running Jogging Exercise Gym Workout||Men&Women Kids||2.3kg Each,4.5kg Pair"
            },
          ])
  
    return (
        <div>
            <div className="container pb-5">
            <div className="equipment row">
              {data.map((element)=>{
                  return (<div className="col-md-4 g-5">
                   <Items images={element.images} title={element.title} key={element.id} desc={element.desc} price={element.price} sale={element.sale}/>
               </div>
              )})}  
            
            </div>
            </div>
        </div>
    )
}