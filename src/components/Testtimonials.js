import React, { useState } from 'react'
import Partners from './Partners'

export default function Testtimonials() {
    const [selected, setSelected] = useState(0);

    const testimonials = [
        {
            image: './images/person1.jpg',
            review: "xb b xv ipsum dolor sit amet, consectetur adipisicing elit. Expedita, necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, necessitatibus.",
            name: "Elizabeth Margaret"
        },
        {
            image: './images/person2.jpg',
            review: "sgbf ipsum dolor sit amet, consectetur adipisicing elit. Expedita, necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, necessitatibus.",
            name: "Kevin Hart"
        },
        {
            image: './images/person3.jpg',
            review: "yuhvc ipsum dolor sit amet, consectetur adipisicing elit. Expedita, necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, necessitatibus.",
            name: "John Abraham"
        },
        {
            image: './images/person4.jpg',
            review: "wsdf ipsum dolor sit amet, consectetur adipisicing elit. Expedita, necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, necessitatibus.",
            name: "Ankit Malhotra"
        }
    ]
    const len = testimonials.length;
   
    return (
        <div style={{height:"100vh"}}>
            <div className="testimonials" style={{ paddingTop: "10rem"}}>
                <div className="left-t">
                    <span>Testimonials</span><span style={{ color: "transparent", WebkitTextStrokeColor: "#301934", WebkitTextStrokeWidth: "4px" }}>What they</span><span>say about us</span>
                    <span>{testimonials[selected].review}</span>
                    <span>
                        <span style={{ color: "#301934", fontWeight: "bold", fontSize: "20px" }}>- {testimonials[selected].name}</span>
                    </span>
                </div>
                <div className="right-t">
                    <div></div>
                    <div></div>
                    <img src={testimonials[selected].image} alt="" />
                    <div className="arrows">
                       <img src="./images/leftarrow.png" alt="" onClick={()=>{
                        selected===0?setSelected(len-1):setSelected((prev)=>prev-1)
                       }}/>
                        <img src="./images/rightarrow.png" alt="" onClick={()=>{
                        selected===len-1?setSelected(0):setSelected((prev)=>prev+1)
                       }}/>
                    </div>
                </div>
                
            </div>
            <Partners/>
        </div>
    )
}
