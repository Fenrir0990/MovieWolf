import React from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import "./Home.css";

import {a} from "../../etc/const";
import { TypeState } from "../../Redux/Actions-Types/types";

import { getPopularMovie } from "../../Redux/Actions/Index";

import NavBar from "../NavBar/NavBar";
const Home = ()=>{
    const dispatch = useDispatch()
    const Populars = useSelector((state:TypeState)=>state.popularMovies)    

    const getPopular = async()=>{
        dispatch(getPopularMovie());
        console.log(Populars)
    }
    return(
        <div className="HomeContainer">
            <header className="FirstContainerHome">
                <NavBar/>
                <h2 className="titlePort">Your Favourite Movies.Explained.</h2>
                <h4>Figure out what happend.Then find out why</h4>
                <input></input>
                <button onClick={getPopular}>prueba</button>
            </header>
            <div className="HomeComponent PopularMovies">

            </div>
            <div className="HomeComponent Recently">

            </div>
        </div>
    )
}

export default Home