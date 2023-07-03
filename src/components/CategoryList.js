import React from 'react'
import { Link } from 'react-scroll'

export default function CategoryList() {
  return (
    <div>
      <div className="catList" style={{paddingTop:"70px"}}>
        <nav>
            <ul className='menu border-bottom'>
                <li><Link className="catmenu" to="bestseller"  >Best Sellers</Link></li>
                <li><Link className="catmenu" to="equipment" >Equipments</Link></li>
                <li><Link  className="catmenu" to="diet" >Diets and Supplements</Link></li>
            </ul>
        </nav>
        <p></p>
      </div>
    </div>
  )
}