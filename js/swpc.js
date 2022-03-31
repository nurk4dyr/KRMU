document.onreadystatechange = function() {

    let splide_main = new Splide('#splide_main', {
        direction: 'ttb',
        width: '100vw',
        height: '100vh',
        wheel    : true,
        waitForTransition: true,
        drag: true,
        noDrag: '.images',
        gap: '5em',
        speed: 900,
        breakpoints: {
            640: {
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
        } );

        splide.on('pagination:mounted', function(data) {
            data.list.classList.add( 'splide_img__pagination--custom' );
        });

        splide.mount();
    }

}