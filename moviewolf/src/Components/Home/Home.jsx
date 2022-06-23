import React, {useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {AiFillCaretRight,AiTwotoneFire,AiOutlineHourglass,AiOutlineSend} from "react-icons/ai"

import { getAllmovies, getPopularMovie,getRecentlyMovie, SearchMovies } from "../../Redux/Actions/Index";

import NavBar from "../NavBar/NavBar";
import HomeCard from "../Cards/HomeCard";

import "./Home.css";


const Home = ()=>{

    //**HOOKS**//
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Populars = useSelector((state)=>state.popularMovies)    
    const Recently = useSelector((state)=>state.recentlyMovies)
    const [search,setsearch] = useState('')

    useEffect(()=>{
        dispatch(getAllmovies(20))
        if(Populars.length ===0) dispatch(getPopularMovie());
        if(Recently.length===0) dispatch(getRecentlyMovie());
         
    },[dispatch])

    //**FUNCTIONS**/
    const onChange = (e)=>{
        setsearch(e.target.value)
        
    }
    const searching = (search)=>{
        dispatch(SearchMovies(search,1))
        navigate("/AllMovies")
    }
    //**COMPONENTS**//
    const popularsCards= Populars?.slice(0,12).map(movie=>
            <HomeCard 
                key={movie.id} 
                id = {movie.id}
                title={movie.title} 
                posterImg={movie.posterImg}
            />)
    const recentlyCards= Recently?.slice(0,12).map(movie=>
        <HomeCard 
                key={movie.id} 
                id = {movie.id}
                title={movie.title} 
                posterImg={movie.posterImg}
            />)
    return(
        <div className="HomeContainer">
            <header className="FirstContainerHome">
                <NavBar/>
                <h2 className="titlePort">Your Favourite Movies.Explained.</h2>
                <h4>Figure out what happend.Then find out why</h4>
                <span>
                    <input type="search" value={search} name="search" onChange={(e)=>onChange(e)}></input>
                    <button onClick={()=>{searching(search)}}>Search</button>
                </span>
                
            </header>
            <div className="HomeComponent PopularMovies">
                <span className="PopularTitle">
                    <h4 className="title"><AiTwotoneFire/>Popular Movies</h4>
                    <button className="buttonCatalogo Popular" onClick={()=>navigate("/AllMovies")}>Show All<AiFillCaretRight/></button>
                </span>
                <div className="grid">
                {
                     popularsCards 
                    /* Populars.map(movie=><Card title={movie.title} posterImg={movie.posterImg}></Card>) */
                }

                </div>
                
            </div>
            <div className="HomeComponent RecentlyMovies">
                    <span className="RecentlyTitle">
                        <h4 className="title"><AiOutlineHourglass/>Recently Movies</h4>
                        <button className="buttonCatalogo Recently" onClick={()=>navigate("/catalogue")}>Show All<AiOutlineSend/></button>
                    </span>
                    <div className="grid">
                        {
                            recentlyCards
                        }
                    </div>
                
            </div>
        </div>
    )
}

export default Home