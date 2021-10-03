import React, { useEffect, useState } from 'react';


import Cart from '../Cart/Cart';
import Display from '../displayMeal/Display';
import './Shop.css'

const Shop = () => {
    const [meals,setMeals] = useState([])
    const [cart,setCart] = useState([])
    
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(json => setMeals(json.meals))
  
    },[])
    const handleaddTocart = (product)=>{
        const newCart = [...cart,product]
        setCart(newCart)

    }
    return (
        <div className="shop-container">
            <div className="displayMeal">
                
                
                {
                    meals.map(meal => <Display 
                        key={meal.idMeal}
                        data={meal}
                        handleaddTocart = {handleaddTocart}
                        >
                        
                        </Display>)
                }
            </div>
            <div>
                Items Cart
                <p>Total:{cart.length}</p>
                <Cart cart={cart}></Cart>
            </div>

            
        </div>
    );
};

export default Shop;