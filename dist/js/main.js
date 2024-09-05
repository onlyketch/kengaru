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

    // Header Navigation

    let headerNavlinks = document.querySelectorAll('.header__nav-item > a');

    for (let i = 0; i < headerNavlinks.length; i++) {
        headerNavlinks[i].addEventListener('click', function() {
            for (let j = 0; j < headerNavlinks.length; j++) {
                headerNavlinks[j].classList.remove('active');
            }
            headerNavlinks[i].classList.add('active');
        });
    }


    //Reviews

    let reviewItems = document.querySelectorAll('.reviews__item');

    for (let i = 0; i < reviewItems.length; i++) {
        reviewItems[i].addEventListener('click', function(e) {
            console.log(e.target);
            if (!e.target.classList.contains('reviews-img') && !e.target.classList.contains('reviews__item-image-search-icon')) {
                reviewItems[i].classList.toggle('active');
            }
            
        });

    }

    // Mob Menu

    let headerBtnMenu = document.querySelector('.header__btn-menu');
    let mobileMenu = document.querySelector('.mobile-menu');
    let mobileMenuLinks = document.querySelectorAll('.mobile-menu__nav-item > a');
    let mobileMenuClose = document.querySelector('.mobile-menu__close');

    headerBtnMenu.addEventListener('click', function() {
        mobileMenu.classList.add('visible');
        document.body.classList.add('overflow-hidden');
    });

    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('visible');
        document.body.classList.remove('overflow-hidden');
    });

    for (let i = 0; i < mobileMenuLinks.length; i++) {
        mobileMenuLinks[i].addEventListener('click', function() {
            mobileMenu.classList.remove('visible');
            document.body.classList.remove('overflow-hidden');
        });
    }

    

    
    



});