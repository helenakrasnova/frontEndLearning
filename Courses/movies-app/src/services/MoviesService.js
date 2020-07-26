
export class MoviesService {
    constructor() {
        this.moviesEndpoint = 'https://reactjs-cdp.herokuapp.com/movies';
    }
    buildQueryString(searchRequest) {
        if (!searchRequest) {
            return '';
        }
        let queryString = `?`;
        queryString = this.buildSearchClause(searchRequest, queryString);
        queryString = this.buildSortClause(searchRequest, queryString);
        return queryString;
    }
    buildSortClause(searchRequest, queryString) {
        if (searchRequest.sortBy) {
            queryString += `&sortBy=${searchRequest.sortBy}`
        }
        if (searchRequest.sortOrder) {
            queryString += `&sortOrder=${searchRequest.sortOrder}`
        }
        return queryString;
    }
    buildSearchClause(searchRequest, queryString) {
        if (searchRequest.searchBy) {
            queryString += `searchBy=${searchRequest.searchBy}`
        }
        if (searchRequest.search) {
            if (searchRequest.searchBy === 'genres') {
                queryString += `&filter=${searchRequest.search}`
            }
            else {
                queryString += `&search=${searchRequest.search}`
            }
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