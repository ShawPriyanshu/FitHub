import React from 'react'

export default function Items(props) {
    return (
        <div>
            <div className="card" style={{width:"100%"}}>
                
                <img className="card-img-top mb-4" src={props.images} alt="Card image cap" style={{aspectRatio:"3/2",objectFit:"contain"}} />
                <div className="card-body" >
                <a href="/">
                    <h5 className="card-title my-3" style={{color:"#301934"}}>{props.title}</h5>
                    <p className="card-text">
                        <ul>
                            <li>{props.price}</li>
                            <li>{props.sale}</li>
                            <li>{props.desc}</li>
                        </ul>
                    </p>
                    </a>
                    <button className="btn btn" style={{color:"white" ,background:"#301934"}}>Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}
