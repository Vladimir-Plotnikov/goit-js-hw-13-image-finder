import './styles.css';
import imageCardTpl from './templates/image-card.hbs';
import ImageApiService from './js/api-service';
import getRefs from './js/get-refs';

const refs = getRefs();
const imageApiService = new ImageApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
    
    e.preventDefault();
    clearGalleryContainer();
    imageApiService.query = e.currentTarget.elements.query.value;
    if (imageApiService.query === '') {
        alert('Enter correct word');
    }
    imageApiService.resetPage();
    imageApiService.fetchImages().then(appendImageMarkup);
}

function onLoadMore(e) {
  imageApiService.fetchImages().then(appendImageMarkup);
}

function appendImageMarkup(hits) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', imageCardTpl(hits));
}

window.scrollTo({
    top: 1000,
    behavior: "smooth"
});

function clearGalleryContainer() {
    refs.galleryContainer.innerHTML = '';
}


