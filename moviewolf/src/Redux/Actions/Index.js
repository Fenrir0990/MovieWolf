////***ACTIONS***////
import axios from "axios";

import * as ActionsTypes from "../Actions-Types/ActionsTypes"
import * as url from "../../utils/Url" 
import defaul from "../../assets/MovieWolf.png"

export const getAllmovies = (a) => async(dispatch)=>{
    try{
        var movies = [];
        var i = 1;
        var promise = "a";
        while(i<=a){
            promise = axios.get(url.API_URL+url.page(i))
            movies.push(promise)
            
            i=i+1
        };
        movies= await Promise.all(movies);
        movies= movies.map(arr=>arr.data.results.map(movie=>movie));
        movies = movies.flat().map(movie=>{
            return {
                id:movie.id,
                title:movie.original_title,
                posterImg:url.UrlImg+movie.poster_path,
                voteAverage:movie.vote_average,
                voteCount:movie.vote_count
            };
        });
        return dispatch({
            type:ActionsTypes.GETALLMOVIES,
            payload:movies
        });
    }
    catch(err){
        console.log(err);
        throw err;
    };
};
export const getPopularMovie = ()=>async(dispatch)=>{
    try{
        const {data} = await axios.get(url.POPULAR);
        var movies = data.results.map(movie=>{
            return {
                id:movie.id,
                title:movie.original_title,
                posterImg:url.UrlImg+movie.poster_path
            }
        })
        return dispatch({
            type:ActionsTypes.GETPOPULARMOVIE,
            payload:movies
            
        })
    }
    catch(err){
        console.log(err)
        throw err
    }
};
export const getRecentlyMovie = ()=>async(dispatch)=>{
    try{
        const {data} = await axios.get(url.RECENTLY);
        var movies = data.results.map(movie=>{
            return {
                id:movie.id,
                title:movie.original_title,
                posterImg:movie.poster_path?url.UrlImg+movie.poster_path:defaul
            }
        })
      
        return dispatch({
            type:ActionsTypes.GETRECENTLYMOVIE,
            payload:movies
            
        })
    }
    catch(err){
        console.log(err)
        throw err
    }
};
export const getDetailMovie = (id)=>async(dispatch)=>{
    try{
        const {data} = await axios.get(url.API_URL_MOVIE+id+"?"+url.API_KEY+"&language=en-US");
       
        var movie = {
            title:data.original_title,
            summary:data.overview,
            genres:data.genres,
            backDrop:url.UrlImg+data.backdrop_path,
            posterImg:data.poster_path?url.UrlImg+data.poster_path:defaul,
            rating:data.vote_average
        }
        return dispatch({
            type:ActionsTypes.DETAILMOVIE,
            payload:movie
        })
    }
    catch(err){
        console.log(err)
        throw err
    }
};
export const filterByStars = (number)=>async(dispatch)=>{
    try{
       
        return dispatch({
            type:ActionsTypes.FILTERAVERAGE,
            payload:number
            
        })
    }
    catch(err){
        console.log(err)
        throw err
    }
};
export const SearchMovies = (text,a)=>async(dispatch)=>{
    try{
        var movies = [];
        var i = 1;
        var promise = "a";
        while(i<=a){
            promise = axios.get(url.API_URL_SERACH+url.query.search(text)+url.query.page(i))
            movies.push(promise)
            
            i=i+1
        };
        movies= await Promise.all(movies);
        movies= movies.map(arr=>arr.data.results.map(movie=>movie));
        movies = movies.flat().map(movie=>{
            return {
                id:movie.id,
                title:movie.original_title,
                posterImg:movie.poster_path?url.UrlImg+movie.poster_path:defaul,
                voteAverage:movie.vote_average,
                voteCount:movie.vote_count
            };
        });
        return dispatch({
            type:ActionsTypes.SEARCHMOVIES,
            payload:movies
            
        })
    }
    catch(err){
        console.log(err)
        throw err
    }
};



