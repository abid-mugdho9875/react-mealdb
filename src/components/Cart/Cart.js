import React from 'react';

const Cart = (props) => {
    console.log(props)
    const {cart} = props
   
    return (
        <div>
            <h1>Item:{cart.strMeal}</h1>
            {
               cart.map((ele)=><h1>{ele.strMeal}</h1>)
             }
        </div>
    );
};

export default Cart;