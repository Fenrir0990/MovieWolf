export const API_KEY = "api_key=5503ea5658ecebbae7284ed4dd3e9a5d";
export const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTAzZWE1NjU4ZWNlYmJhZTcyODRlZDRkZDNlOWE1ZCIsInN1YiI6IjYyYjA4OGMwNTliYzA3MDA2MzU2ODRjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL2RsNUllY8r4kHQMERDKsp_ucNgDhuZz4AvwIk8mtI"
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_URL = BASE_URL + "/discover/movie?"+ API_KEY;
export const API_URL_MOVIE = BASE_URL + "/movie/";
export const API_URL_SERACH = BASE_URL + "/search/movie?"+API_KEY

export const UrlImg="https://image.tmdb.org/t/p/w500";
const voteAverage = (number)=>{
    return `vote_average.gte=${number}`
};
export const page = (number)=>{
    return `&page=${number}`
};
const search = (text, number)=>{
    return `&query=${text}`
}
export const query={
    popular:"&sort_by=popularity.desc",
    voteAverage,
    recently:"&sort_by=primary_release_date.desc",
    page,
    search,
};

/**Link Complit **/

export const POPULAR = API_URL + query.popular;
export const RECENTLY = API_URL + query.recently;