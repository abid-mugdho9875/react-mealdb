import React, { useEffect, useState } from 'react';
import Display from '../displayMeal/Display';
import './Shop.css'

const Shop = () => {
    const [meals,setMeals] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(json => setMeals(json.meals))
  
    },[])
    return (
        <div className="shop-container">
            <div className="displayMeal">
                
                
                {
                    meals.map(meal => <Display 
                        key={meal.idMeal}
                        data={meal}></Display>)
                }
            </div>
            <div>
                Items Cart
            </div>

            
        </div>
    );
};

export default Shop;