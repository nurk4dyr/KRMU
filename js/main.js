document.onreadystatechange = function() {

    let index_splide = new Splide('#index_splide', {
        padding: '5rem',
        perPage: 3,
        arrows: false,
        pagination: false,
        gap: '100px',
        fixedWidth: '560px',
        wheel: true,
    });

    index_splide.mount();

}