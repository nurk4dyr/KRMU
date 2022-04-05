document.onreadystatechange = function() {

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

            768: {
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

                800: {
                    width: '100%'
                }
            }
        } );

        splide.on('pagination:mounted', function(data) {
            data.list.classList.add( 'splide_img__pagination--custom' );
        });

        splide.mount();
    }

}



document.addEventListener('touchmove', scrollEvent);

let header = document.querySelector('.header');


function scrollEvent() {
    console.log(window.scrollY)
}