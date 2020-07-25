
export class MoviesService {
    constructor() {
        this.moviesEndpoint = 'https://reactjs-cdp.herokuapp.com/movies';
    }
    buildQueryString(searchRequest) {
        if (!searchRequest) {
            return '';
        }
        let queryString = `?`;
        if (searchRequest.search) {
            queryString += `search=${searchRequest.search}`
        }
        if (searchRequest.searchBy) {
            queryString += `&filter=${searchRequest.search}`
        }
        return queryString;
    }

    async getMovies(searchRequest) {
        let queryString = this.buildQueryString(searchRequest);
        let response = await fetch(`${this.moviesEndpoint}${queryString}`);
        let movies = await response.json();
        return movies;
    }
}



//создать компонент movieDetails и в него вынести кусок с картинкой и в moviesList вызывать его