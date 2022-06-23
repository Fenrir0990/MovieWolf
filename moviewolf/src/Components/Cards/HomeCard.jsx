import React from "react";
import "./HomeCard.css"
import {Link} from "react-router-dom"
 

const HomeCard = ({title,posterImg, id})=>{
    return (
        <div className="CardContainerH">
            <Link to={`/Detail/${id}`}>
            <img className="CardImgH"src={posterImg} alt="img not found" />
            {/* <p>{title}</p> */}
            </Link>
        </div>
    )
}

export default HomeCard