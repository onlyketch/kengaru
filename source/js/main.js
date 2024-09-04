document.addEventListener('DOMContentLoaded', function() {
    
    $(".experience__slider").owlCarousel({
        margin: 0,
        items: 4,
        nav: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoWidth: true
    });

    $(".security__slider").owlCarousel({
        margin: 0,
        items: 1,
        nav: true,
        loop: true,
        smartSpeed: 500
    });

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });


    //Reviews

    let reviewItems = document.querySelectorAll('.reviews__item');
    let reviewTexts = document.querySelectorAll('.reviews__item-text');

    for (let i = 0; i < reviewItems.length; i++) {
        reviewItems[i].addEventListener('click', function() {
            reviewItems[i].classList.toggle('active');
        });

    }

    

    
    



});