import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/MovieWolf.png"

import "./NavBar.css"

const NavBar = ()=>{
    return (<nav className="NavBarContainer">
        <ul className="ul_nav">
            <li className="ul_li">
                <img className="Icon" src={Icon} alt={"img not found"}/>
            </li>
            <li className="ul_li text">
                <Link className="Link" to={"/"}>Home</Link>
            </li>
            <li className="ul_li text">
                <Link className="Link text" to={"/AllMovies"}>All Movies</Link>
            </li>
            <li className="ul_li"></li>
            <li className="ul_li"></li>
        </ul>
    </nav>)
}
export default NavBar