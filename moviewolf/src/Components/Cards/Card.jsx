import React from "react";
import "./Card.css"
import {Link} from "react-router-dom"
 

const Card = ({title,posterImg, id})=>{
    return (
        <div className="CardContainer">
            <Link className="Link" to={`/Detail/${id}`}>
                <img className="CardImg"src={posterImg} alt="img not found" />
                <p>{title}</p>
            </Link>
        </div>
    )
}

export default Card