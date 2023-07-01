import React, { useState } from 'react'
import CategoryList from './CategoryList'
import BestSellers from './BestSellers'
import Equipments from './Equipments'
import Diets from './Diets'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Categories() {
  
  return (
    <div className="catbody">
      
      <Router>
        <CategoryList />
        
        <BestSellers />
        <Switch>
        
        <Route exact path="/bestsellers">
            <BestSellers />
          </Route>
          <Route exact path="/equipments">
            <Equipments />
          </Route>
          <Route exact path="/diets">
            <Diets />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}
