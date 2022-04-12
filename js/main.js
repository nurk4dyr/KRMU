document.onreadystatechange = function() {

    let index_splide = new Splide('#index_splide', {
        padding: '5rem',
        perPage: 3,
        arrows: false,
        pagination: false,
        gap: '100px',
        fixedWidth: '560px',
        wheel: true,
        drag: 'free',

        breakpoints: {
            1920: {
                fixedWidth: '30%',
                gap: '70px'
            },

            1440: {
                fixedWidth: '35%',
                gap: '60px',
                perPage: 2
            },

            1280: {
                fixedWidth: '32%',
                gap: '35px',
                perPage: 3
            },

            1680: {
                fixedWidth: '24%',
                gap: '55px'
            },

            1366: {
                fixedWidth: '30%',
                gap: '50px'
            },

            1024: {
                fixedWidth: '40%',
                gap: '40px',
                perPage: 2
            },

            835: {
                fixedWidth: '70%',
                gap: '50px',
                perPage: 1
            },

            600: {
                fixedWidth: '98%',
                gap: '70px',
                perPage: 1
            },
        }
    });

    index_splide.mount();






    let anim_el = document.querySelectorAll('[data-animation-rule]');

    console.log(anim_el)

    for (let i = 0; i < anim_el.length; i++) {
        let rule = anim_el[i].getAttribute('data-animation-rule');
        let anim_class = `anim_${rule}`;

        anim_el[i].classList.add(anim_class);
    }


    document.querySelector('.header-mobile__burger').addEventListener('click', function() {

        document.querySelector('.header-mobile__menu').style.left = '0';
        document.querySelector('.header-mobile__bgc').style.left = '0';
        this.style.opacity = '0';

    });


    document.querySelector('.header-mobile__close').addEventListener('click', function() {

        document.querySelector('.header-mobile__menu').style.left = '-100%';
        document.querySelector('.header-mobile__bgc').style.left = '-100%';
        document.querySelector('.header-mobile__burger').style.opacity = '1';

    });

    document.querySelector('.header-mobile__menu').addEventListener('click', function() {

        document.querySelector('.header-mobile__menu').style.left = '-100%';
        document.querySelector('.header-mobile__bgc').style.left = '-100%';
        document.querySelector('.header-mobile__burger').style.opacity = '1';

    });

}