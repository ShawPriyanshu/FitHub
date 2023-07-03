import React from 'react'
import { Link } from 'react-router-dom'
export default function CategoryList() {
  return (
    <div>
      <div className="catList" style={{paddingTop:"70px"}}>
        <nav>
            <ul className='menu border-bottom'>
                <li><Link className="catmenu" to="/categories">Best Sellers</Link></li>
                <li><Link className="catmenu" to="/equipments">Equipments</Link></li>
                <li><Link  className="catmenu" to="/diets">Diets and Supplements</Link></li>
            </ul>
        </nav>
        <p></p>
      </div>
    </div>
  )
}
