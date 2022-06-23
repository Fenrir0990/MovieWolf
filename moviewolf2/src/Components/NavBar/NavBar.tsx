import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../Img/MovieWolf.png"

import "./NavBar.css"

const NavBar = ()=>{
    return (<nav className="NavBarContainer">
        <ul className="ul_nav">
            <li className="ul_li">
                <img className="Icon" src={Icon}/>
            </li>
            <li className="ul_li">
                <Link className="Link" to={"/"}>Home</Link>
            </li>
            <li className="ul_li"></li>
            <li className="ul_li"></li>
            <li className="ul_li"></li>
        </ul>
    </nav>)
}
export default NavBar