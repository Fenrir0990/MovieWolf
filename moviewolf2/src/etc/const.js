export const API_KEY = "api_key=5503ea5658ecebbae7284ed4dd3e9a5d"
export const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTAzZWE1NjU4ZWNlYmJhZTcyODRlZDRkZDNlOWE1ZCIsInN1YiI6IjYyYjA4OGMwNTliYzA3MDA2MzU2ODRjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL2RsNUllY8r4kHQMERDKsp_ucNgDhuZz4AvwIk8mtI"
export const BASE_URL = "https://api.themoviedb.org/3"
export const API_URL = BASE_URL + "/discover/movie?"+ API_KEY
export const a = API_URL+API_KEY+ "&page=10"
const query={
    popular:"&sort_by=popularity.desc"
}

/**Link Complit **/

export const POPULAR = API_URL + query.popular 