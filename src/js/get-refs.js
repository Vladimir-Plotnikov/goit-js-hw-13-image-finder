export default function getRefs() {
    return {
        searchForm: document.querySelector('.search-form'),
        galleryContainer: document.querySelector('.gallery'),
        loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    };
};