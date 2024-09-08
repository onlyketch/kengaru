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
        autoWidth: true,
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
    let mobileMenuOrderBtn = document.querySelector('.mobile-menu__order');

    headerBtnMenu.addEventListener('click', function() {
        mobileMenu.classList.add('visible');
        document.body.classList.add('overflow-hidden');
    });

    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('visible');
        document.body.classList.remove('overflow-hidden');
    });

    mobileMenuOrderBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('visible');
    });

    for (let i = 0; i < mobileMenuLinks.length; i++) {
        mobileMenuLinks[i].addEventListener('click', function() {
            mobileMenu.classList.remove('visible');
            document.body.classList.remove('overflow-hidden');
        });
    }

     // Order Form
     
     let orderForm = document.querySelector('.order-form');
     let orderForma = document.querySelector('.order-form__form');
     let orderFormBody = document.querySelector('.order-form__body');
     let orderButtons = document.querySelectorAll('.order-button');
     let orderFormInputs = document.querySelectorAll('.order-form__input');
     let orderInputName = document.getElementById('order-name');
     let orderInputPhone = document.getElementById('order-phone');
     let orderInputComment = document.getElementById('order-comment');
     let orderHiddenName = document.querySelector('input[name=order-name]');
     let orderHiddenPhone = document.querySelector('input[name=order-phone]');
     let orderHiddenComment = document.querySelector('input[name=order-comment]');
     let orderFormClose = document.querySelector('.order-form__close');
     let orderFormSuccess = document.querySelector('.order-form__success');
     let orderFormSuccessClose = document.querySelector('.order-form__success-close');
     let orderPlaceholderName = 'введите имя';
     let orderPlaceholderPhone = '+7 000 000 00 00';
     let orderPlaceholderComment = 'введите комментарий';

     function cursorPosition(target, start) {
        const range = document.createRange();
        range.selectNodeContents(target);
        range.collapse(start);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
     }

     for (let i = 0; i < orderFormInputs.length; i++) {
        orderFormInputs[i].addEventListener('click', function() {

            if (!orderFormInputs[i].classList.contains('active')) {
                if (i !== 1) {
                    cursorPosition(orderFormInputs[i], true);
                } else {
                    orderFormInputs[i].textContent = orderFormInputs[i].textContent.replace(orderPlaceholderPhone, '+7');
                    cursorPosition(orderFormInputs[i], false);
                    orderFormInputs[i].classList.add('active');
                }
                
            }
            
        });
     }

     for (let i = 0; i < orderButtons.length; i++) {
        orderButtons[i].addEventListener('click', function() {
            orderForm.classList.add('show');
            orderFormBody.classList.add('show');
            orderFormBody.classList.add('visible');
            document.body.classList.add('overflow-hidden');
        });
     }

     orderFormClose.addEventListener('click', function() {
            orderFormBody.classList.remove('show');
            setTimeout(function() {
                for (let input of orderFormInputs) {
                    input.classList.remove('active');
                }
                orderInputName.textContent = orderPlaceholderName;
                orderInputPhone.textContent = orderPlaceholderPhone;
                orderInputComment.textContent = orderPlaceholderComment;
                orderHiddenName.value = '';
                orderHiddenPhone.value = '';
                orderHiddenComment.value = '';
                orderFormBody.classList.remove('visible');
                orderForm.classList.remove('show');    
                document.body.classList.remove('overflow-hidden');
            }, 500);
            
     });

     orderFormSuccessClose.addEventListener('click', function() {
            orderFormSuccess.classList.remove('show');
            setTimeout(function() {
                orderFormSuccess.classList.remove('visible');
                orderForm.classList.remove('show');    
                document.body.classList.remove('overflow-hidden');
            }, 500);
     });

     orderInputName.addEventListener('input', function() {
        if (!orderInputName.classList.contains('active')) {
            orderInputName.textContent = orderInputName.textContent.replace(orderPlaceholderName, '');
            cursorPosition(orderInputName, false);
            orderInputName.classList.add('active');
        } else {
            if (orderInputName.textContent == '') {
                orderInputName.classList.remove('active');
                orderInputName.textContent = orderPlaceholderName;
            }
        }
        orderHiddenName.value = orderInputName.textContent;
     });

     orderInputPhone.addEventListener('input', function() {
        orderInputPhone.textContent = orderInputPhone.textContent.replace(/[A-Za-zА-Яа-яЁё]/, '');
        cursorPosition(orderInputPhone, false);
        orderHiddenPhone.value = orderInputPhone.textContent;
        if (orderInputPhone.textContent.length > 12) {
            orderInputPhone.textContent = orderInputPhone.textContent.slice(0, -1);
            cursorPosition(orderInputPhone, false);
        }
        if (orderInputPhone.textContent == '') {
            orderInputPhone.textContent = '+7';
            cursorPosition(orderInputPhone, false);
        }
     });

     orderInputPhone.addEventListener('focus', function() {
        if (!orderInputPhone.classList.contains('active')) {
                orderInputPhone.textContent = orderInputPhone.textContent.replace(orderPlaceholderPhone, '+7');
                cursorPosition(orderInputPhone, false);
                orderInputPhone.classList.add('active');
        }
     });    

     orderInputComment.addEventListener('input', function() {
        if (!orderInputComment.classList.contains('active')) {
            orderInputComment.textContent = orderInputComment.textContent.replace(orderPlaceholderComment, '');
            cursorPosition(orderInputComment, false);
            orderInputComment.classList.add('active');
        } else {
            if (orderInputComment.textContent == '') {
                orderInputComment.classList.remove('active');
                orderInputComment.textContent = orderPlaceholderComment;
            }
        }
        orderHiddenComment.value = orderInputComment.textContent;
     });

     orderForma.addEventListener('submit', function(event) {
            event.preventDefault();

            if (orderHiddenName.value !== '' && orderHiddenPhone.value !== '') {

                let form_data = $(this).serialize();
                $.ajax({
                    type: "GET", 
                    url: "/",
                    data: form_data,
                    success: function() {

                        orderFormBody.classList.remove('show');
                        setTimeout(function() {
                            orderFormBody.classList.remove('visible');
                            for (let input of orderFormInputs) {
                                input.classList.remove('active');
                            }
                            orderInputName.textContent = orderPlaceholderName;
                            orderInputPhone.textContent = orderPlaceholderPhone;
                            orderInputComment.textContent = orderPlaceholderComment;
                            orderHiddenName.value = '';
                            orderHiddenPhone.value = '';
                            orderHiddenComment.value = '';
                        }, 500);

                        orderFormSuccess.classList.add('show');
                        orderFormSuccess.classList.add('visible');
                    }
               
                });
            }

     });


});