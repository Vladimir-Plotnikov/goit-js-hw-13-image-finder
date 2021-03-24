const key = '19211100-bdfc54b640ca60be4b98fccbf';
const BASE_URL = 'https://pixabay.com/api/';

export default class ImageApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        return fetch(`${BASE_URL}?image_type=photo
        &orientation=horizontal
        &q=${this.searchQuery}
        &page=${this.page}
        &per_page=12
        &key=${key}`)
            .then(response => response.json())
            .then(({hits}) => {
                this.incrementPage();   
                return hits;
            });
    }
    incrementPage() {
        this.page += 1
    }
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}