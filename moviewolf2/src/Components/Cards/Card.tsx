import React from "react";
import "./Card.css"
import {Link} from "react-router-dom"
 

interface props{

}

const Card = (props:props)=>{
    return (
        <Link to="/prueba">
        <div className="CardContainer">
            <img className="CardImg"src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7-VFXeihra7vhERoQvzCXrtdXD6enaRxmg&usqp=CAU"} alt="img not found" />
            
        </div>
        </Link>
    )
}

export default Card