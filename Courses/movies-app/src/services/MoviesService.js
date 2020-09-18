
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
        queryString = this.buildPaginationClause(searchRequest, queryString);
        return queryString;
    }
    buildSortClause(searchRequest, queryString) {
        if (searchRequest.sortBy) {
            queryString += `&sortBy=${searchRequest.sortBy}`;
        }
        if (searchRequest.sortOrder) {
            queryString += `&sortOrder=${searchRequest.sortOrder}`;
        }
        return queryString;
    }
    buildSearchClause(searchRequest, queryString) {
        if (searchRequest.searchBy) {
            queryString += `searchBy=${searchRequest.searchBy}`;
        }
        if (searchRequest.search) {
            if (searchRequest.searchBy === 'genres') {
                queryString += `&filter=${searchRequest.search}`;
            }
            else {
                queryString += `&search=${searchRequest.search}`;
            }
        }
        return queryString;
    }
    buildPaginationClause(searchRequest, queryString) {
        queryString += `&offset=${searchRequest.offset}`;
        queryString += `&limit=${searchRequest.limit}`;
        return queryString;
    }
    async getMovie(id) {

        let response = await fetch(`${this.moviesEndpoint}/${id}`);
        let movie = await response.json();
        if (Object.keys(movie).length === 0) {
            return null;
        }
        return movie;
    }
    async getMovies(searchRequest) {
        let queryString = this.buildQueryString(searchRequest);
        let response = await fetch(`${this.moviesEndpoint}${queryString}`);
        let movies = await response.json();
        return movies;
    }
}
