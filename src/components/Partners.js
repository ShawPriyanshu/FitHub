import React from 'react'
import img1 from './../images/adidas.jpg'
import img2 from './../images/nike.jpg'
import img3 from './../images/reebok.png'
import img4 from './../images/emcure.png'

export default function Partners() {
    return (
        <div>
            <div className="partners">
                <div className="partnerhead"><span>Association </span> <span>with</span></div>
                <div className="partnerimg">
                <img src={img1} alt=""  style={{width:"15%"}}/>
                <img src={img2}   alt=""  style={{width:"15%"}}/>
                <img src={img3} alt=""  style={{width:"15%"}}/>
                <img src={img4} alt=""  style={{width:"15%"}}/>
                </div>
            </div>
        </div>
    )
}