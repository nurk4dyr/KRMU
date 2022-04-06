document.onreadystatechange = function() {

    try {
        let splide_main = new Splide('#splide_main', {
            direction: 'ttb',
            width: '100vw',
            height: '100vh',
            wheel    : true,
            waitForTransition: true,
            drag: false,
            noDrag: '.images',
            gap: '5em',
            speed: 900,
            breakpoints: {

                1440: {
                    drag: true
                },

                835: {
                    destroy: true
                }
            }
        });

        splide_main.on('pagination:mounted', function(data) {
            data.list.classList.add( 'splide_main__pagination--custom' );
        });

        splide_main.mount();

        var splide_img = document.getElementsByClassName( 'splide_img' );

        for ( var i = 0; i < splide_img.length; i++ ) {
            let splide = new Splide( splide_img[ i ], {
                width: '705px',
                height: '830px',
                gap: '3em',
                drag: true,

                breakpoints: {
                    1920: {
                        width: '600px',
                        height: '725px'
                    },
                    1440: {
                        width: '470px',
                        height: '550px'
                    },
                    1280: {
                        width: '35%',
                        height: '500px'
                    },

                    1680: {
                        width: '30%',
                        height: '500px'
                    },

                    1366: {
                        width: '450px',
                        height: '500px'
                    },

                    1024: {
                        width: '550px',
                        height: '500px'
                    },

                    835: {
                        width: '100%'
                    },

                    600: {
                        height: '700px'
                    }
                }
            } );

            splide.on('pagination:mounted', function(data) {
                data.list.classList.add( 'splide_img__pagination--custom' );
            });

            splide.mount();
        }
    } catch (e) {
        console.log(e);
    } finally {
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



    document.addEventListener('touchmove', function() {
        console.log(window.pageYOffset)
    });

    Fancybox.bind('[data-fancybox]');

}