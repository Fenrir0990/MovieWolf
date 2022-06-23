import * as ActionsTypes from "../Actions-Types/ActionsTypes"


export const initialState = {
    allMovies:[],
    copyAllMovies:[],
    popularMovies:[],
    recentlyMovies:[],
    detailMovie:{},
    searchMovies:[]
};

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case ActionsTypes.GETALLMOVIES:
            return{
                ...state,
                allMovies:action.payload,
                copyAllMovies:action.payload
            }
        case ActionsTypes.GETPOPULARMOVIE:
            return {
                ...state,
                popularMovies:action.payload
            }
        case ActionsTypes.GETRECENTLYMOVIE:
            return{
                ...state,
                recentlyMovies:action.payload
            }
        case ActionsTypes.FILTERAVERAGE:
            if(action.payload === null){
                return {
                    ...state,
                    copyAllMovies:[...state.allMovies]
                }
            };
            let filtering = [...state.allMovies];
            const max = action.payload===0?2:action.payload*2;
            const min = action.payload===0?0:max-2;
            filtering = filtering.filter(({voteAverage})=>voteAverage >= min && voteAverage <= max);
            return {
                ...state,
                copyAllMovies:filtering
            };
        case ActionsTypes.DETAILMOVIE:
            return {
                ...state,
                detailMovie:action.payload
            }
        case ActionsTypes.SEARCHMOVIES:
            return {
                ...state,
                searchMovies:action.payload,
                copyAllMovies:action.payload
            }

        default:
            return {...state}
    };

};

export default reducer


