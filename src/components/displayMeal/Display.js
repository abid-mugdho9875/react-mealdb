import React from 'react';
import './Display.css'

const Display = (props) => {
    const {idMeal,strMeal,strInstruction,strMealThumb,strIngredient1,strIngredient2,strIngredient3} = props.data
    return (
        <div className="product-container">
            
            <img src={strMealThumb} alt="MealPicture"/>
              <h1>Name:{strMeal}</h1>
              <h2>Id:{idMeal}</h2>
              <p>Ingredient:</p>
              <p>{strIngredient1}</p>
              <p>{strIngredient2}</p>
              <p>{strIngredient3}</p>
              <button>Add To Cart</button>
            
            
            
        </div>
    );
};

export default Display;