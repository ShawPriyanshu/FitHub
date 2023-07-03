import React from 'react'
import CategoryList from './CategoryList'
import BestSellers from './BestSellers'
import Equipments from './Equipments'
import Diets from './Diets'



export default function Categories() {
  
  return (
    <div className="catbody">
        <CategoryList />
        <BestSellers />
        <Equipments/>
        <Diets/>
    </div>
  )
}