"use strict";

document.onreadystatechange = function () {
  var index_splide = new Splide('#index_splide', {
    padding: '5rem',
    perPage: 3,
    arrows: false,
    pagination: false,
    gap: '100px',
    fixedWidth: '560px',
    wheel: true,
    breakpoints: {
      1920: {
        fixedWidth: '30%',
        gap: '70px'
      },
      1440: {
        fixedWidth: '35%',
        gap: '60px',
        perPage: 2
      }
    }
  });
  index_splide.mount();
};