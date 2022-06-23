import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { useParams,Link } from "react-router-dom";

import styled from "styled-components";

import { getDetailMovie } from "../../Redux/Actions/Index";

import "./Detail.css";
import Spinner from "../MinComponents/Spinner/Spinner";

        

const Detail = ()=>{
    const [show,setShow] = useState(true)
    const dispatch=useDispatch()
    const {id} = useParams()
    const details = useSelector(state=>state.detailMovie)

    useEffect(()=>{
        const e = async()=>{
            setShow(true)
            const d = await dispatch(getDetailMovie(id))
            console.log(1,details)
            setShow(false)
        }

        e()
    },[dispatch])
    
    return(
        <div className="Full">
            {
                show?<Spinner/>:
                <div className="DetailContainer" >
                    <div className="FirstContainerDetail">
                        <h3 className="title center">{details.title}</h3>
                    </div>
                    <div className="SecondContainerDetail">
                        <img className="img"src={details.posterImg}></img>
                         <div >
                            <a className="summary">{details.summary}</a>
                            <div className="extra">
                                {details.genres?.map(a=><p className="genres">{a.name}</p>)} 
                                <center>Rating{details.rating}</center>{}
                            </div>
                        </div>  
                    </div>
                    <div className="ThirtyContainer">
                        <button><Link to={"/"}>Home</Link></button>
                        <button><Link to={"/AllMovies"}>Home</Link></button>      
                    </div> 
                </div>
            }
        </div>
    );
};



export default Detail