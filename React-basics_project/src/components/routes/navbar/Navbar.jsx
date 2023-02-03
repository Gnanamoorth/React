import React from 'react';
import { Menuitems } from "./menuitems";
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar(){
    const imageurl="assests/itTrident-logo.png"
    return (
        <nav className="NavbarItems flex mx-auto">
            <img  title='it TridentSQA' className="navbar-logo" src={imageurl} alt="TridentSQA" />
            <ul className="nav-menu">
                {Menuitems.map((item, index) => {
                    return (
                        <li key={index} className="Home list-none">
                            <Link  className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}</Link>
                        </li>
                    )
                })}
                <button className="signup_button  text-orange-500">Sign Up</button>
                
            </ul>
        </nav>
    );
}
export default Navbar;