import {Action,TypeState} from "../Actions-Types/types"
import { ActionTypes } from "../Actions-Types/ActionsTypes";


export const initialState = {
    allMovies:[],
    popularMovies:[]
};

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case ActionTypes.GETALLMOVIES:
            return{...state,
            allMovies:action.payload}

        default:
            return {...state}
    };

};

export default reducer


