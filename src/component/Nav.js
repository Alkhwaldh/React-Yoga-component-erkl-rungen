import React from 'react';
import "./Nav.css"


function Nav(){
    return(
       <section className="nav">
           <h1 className="logo"> Yoga</h1>
           <ul className="navUl">
                <li>Discover</li>
                <li>Guaide</li>
                <li>Online Class</li>
            </ul>
            <h1>EN</h1>
       </section>
    )
}
export default Nav;