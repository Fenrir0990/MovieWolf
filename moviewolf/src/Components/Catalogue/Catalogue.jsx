import React, {useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination/Pagination";

import "./Catalogue.css"

import { filterByStars, getAllmovies,SearchMovies } from "../../Redux/Actions/Index";

import NavBar from "../NavBar/NavBar";
import Card from "../Cards/Card";
import StarReiting from "../MinComponents/StarRating/ClasStars";

const Catalogue = ()=>{

    //**HOOKS**//
    const dispatch = useDispatch()
    const [rating,setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [search, setSearch] = useState('')
    const movies = useSelector(state=>state.copyAllMovies)
    
    const [page, setPage] = useState(1);
    const [numOfPages] = useState(10);
    const PER_PAGE = 24;
    const start = (page - 1) * PER_PAGE;
    const end = page * PER_PAGE;
    
    useEffect(()=>{
        if(movies.length === 0)dispatch(getAllmovies(20)) 
    },[dispatch])
    
    //**Functions**//
    const searching = (search)=>{
        dispatch(SearchMovies(search,1))
        
    }
    const onChange = (e)=>{
        setSearch(e.target.value)
        
    }
    const filter = (number)=>{''
       dispatch(filterByStars(number))
    }
    //** Elements**//
    const moviesCards = movies?.slice(start,end).map(movie=>
        <Card 
            title={movie.title} 
            posterImg={movie.posterImg}
            id={movie.id} 
            key={movie.id}    
        />)

    return (
        <div className="CatalogueContainer">
            <NavBar/>
            <div className="FirstContainer">
                <div className="Tools">
                    <p>Filter and Order yours movies</p>
                    <span>
                        <label>Search</label>
                        <input 
                            type="search" 
                            value={search} 
                            name="search" 
                            onChange={(e)=>onChange(e)} 
                            onKeyDown={()=>{searching(search)}}></input>
                        <br></br>
                    </span>
                    <span className="rating">
                        <label>Rating</label>
                        <StarReiting 
                            rating={rating}
                            setRating={setRating}
                            hover={hover}
                            setHover={setHover}
                            filter= {filter}                 
                        />
                    </span>
                </div>
                <div className="MoviesContainer">
                    <div className="Movies Grid">
                        {
                            moviesCards
                        }
                    </div>
                    <center>
                    <Pagination
                        pageCount={numOfPages}
                        setPage={setPage}
                        
                    />

                    </center>

                </div>
            </div>
        </div>
    )
}

export default Catalogue