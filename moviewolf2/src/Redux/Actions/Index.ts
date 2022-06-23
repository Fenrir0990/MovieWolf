////***ACTIONS***////
import axios from "axios";
import { Dispatch } from "react"
import {ActionTypes} from "../Actions-Types/ActionsTypes"
import {Action,TypeDispatch} from "../Actions-Types/types"
import {POPULAR} from "../../etc/const" 
export const getAllmovies = () =>async(dispatch:Dispatch<Action>)=>{
    try{
        const {data} = await axios.get(``);
        return dispatch({
            type:ActionTypes.GETALLMOVIES,
            payload:data
        });
    }
    catch(err){
        console.log(err);
        throw err;
    };
};
export const getPopularMovie = ():TypeDispatch=>async(dispatch:TypeDispatch)=>{
    try{
        const {data} = await axios.get(POPULAR);
        console.log(POPULAR)
        return dispatch({
            type:ActionTypes.GETPOPULARMOVIE,
            payload:data
        })
    }
    catch(err){
        console.log(err)
        throw err
    }
};
export const filtByStars = async ()=>{}


