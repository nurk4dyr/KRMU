document.onreadystatechange = function() {
    Fancybox.bind('[data-fancybox="gallery"]', {
            dragToClose: false,

            Toolbar: false,
            closeButton: "top",

            Image: {
                zoom: false,
            },
        });
}