
export class SearchRequest {
    constructor() {
        this.sortBy = 'release_date';
        this.sortOrder = 'desc';
        this.search = '';
        this.searchBy = '';
        this.offset = 0;
        this.limit = 15;
    }
}