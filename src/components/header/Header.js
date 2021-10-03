import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
           <h1> AM Food Service </h1>
           <nav class="nav-style">
               <a href="/home">Home</a>
               <a href="/menu">Menu</a>
               <a href="offer">Offer Menu</a>
           </nav>
        </div>
    );
};

export default Header;