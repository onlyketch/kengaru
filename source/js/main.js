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

    $(".slider-section__slider").owlCarousel({
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
    let reviewItemsTexts = document.querySelectorAll('.reviews__item-text');

    for (let text of reviewItemsTexts) {
        $clamp(text, {clamp: 2});
    }

    for (let i = 0; i < reviewItems.length; i++) {
        reviewItems[i].addEventListener('click', function(e) {
            if (!e.target.classList.contains('reviews-img') && !e.target.classList.contains('reviews__item-image-search-icon')) {
                reviewItems[i].classList.toggle('active');
            }
            if (!reviewItems[i].classList.contains('active')) {
                $clamp(reviewItemsTexts[i], {clamp: 2});
            } else {
                $clamp(reviewItemsTexts[i], {clamp: '500px'});
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
     let orderFormErrorText = document.querySelector('.order-form__error');

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
                orderFormErrorText.classList.remove('visible');
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
        orderHiddenName.value = orderInputName.textContent;
        if (!orderInputName.classList.contains('active')) {
            orderInputName.textContent = orderInputName.textContent.replace(orderPlaceholderName, '');
            cursorPosition(orderInputName, false);
            orderInputName.classList.add('active');
        } else {
            if (orderInputName.textContent == '') {
                orderInputName.classList.remove('active');
                orderInputName.textContent = orderPlaceholderName;
                orderHiddenName.value = '';
            }
        }
     });

     orderInputPhone.addEventListener('input', function() {
        orderInputPhone.textContent = orderInputPhone.textContent.replace(/[A-Za-zА-Яа-яЁё]/, '');
        cursorPosition(orderInputPhone, false);
        orderHiddenPhone.value = orderInputPhone.textContent;
        if (orderInputPhone.textContent.length > 12) {
            orderInputPhone.textContent = orderInputPhone.textContent.slice(0, -1);
            cursorPosition(orderInputPhone, false);
        }
        if (orderInputPhone.textContent.length < 3) {
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

            if (orderHiddenName.value !== '' && orderHiddenPhone.value.length == 12) {

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
                            orderFormErrorText.classList.remove('visible');
                        }, 500);

                        orderFormSuccess.classList.add('show');
                        orderFormSuccess.classList.add('visible');
                    }
               
                });
            } else {
                orderFormErrorText.classList.add('visible');
                if (orderHiddenName.value == '' && orderHiddenPhone.value !== '') {
                    orderFormErrorText.textContent = 'Введите имя';
                } else if (orderHiddenPhone.value.length < 12 && orderHiddenName.value !== '') {
                    orderFormErrorText.textContent = 'Введите телефон';
                } else if (orderHiddenName.value == '' && orderHiddenPhone.value.length < 12) {
                    orderFormErrorText.textContent = 'Введите имя и телефон для связи';
                }
            }

     });


     // селект списка врачей

     let selectVector = document.querySelector('.page-info__select');
     let selectVectorValue = document.querySelector('.page-info__select-value');
     let selectVectorDrop = document.querySelector('.page-info__select-drop');
     let selectVectorDropItems = document.querySelectorAll('.page-info__select-drop-item');
     let hiddenVectorChoose = document.getElementById('vector-choose');
     let hiddenReviewsChoose = document.getElementById('reviews-choose');

     if (selectVector !== null) {
        for (let item of selectVectorDropItems) {
            item.addEventListener('click', function() {
                let val = item.getAttribute('data-value');
                if (hiddenVectorChoose !== null) {
                    hiddenVectorChoose.value = val;
                } else if (hiddenReviewsChoose !== null) {
                    hiddenReviewsChoose.value = val;
                }
                
                selectVectorValue.textContent = item.textContent;
            });
         }
    
         selectVector.addEventListener('click', function() {
            selectVectorDrop.classList.toggle('active');
         });
    
         selectVector.addEventListener('blur', function() {
            if (selectVectorDrop.classList.contains('active')) {
                selectVectorDrop.classList.remove('active');
            }
         });
     }

     // переключение отзывов

     let reviewSwitchers = document.querySelectorAll('.reviews-switcher');
     let selectReviews = document.getElementById('select-reviews');
     let reviewItemsClinic = document.getElementById('reviews-clinic');
     let reviewItemsDoctor = document.getElementById('reviews-doc');

     if (reviewSwitchers !== null) {
        for (let i = 0; i < reviewSwitchers.length; i++) {
            reviewSwitchers[i].addEventListener('click', function() {
                for (let item of reviewSwitchers) {
                    if (item.classList.contains('active')) item.classList.remove('active');
                }
                this.classList.add('active');
                if (i == 1) {
                    selectReviews.classList.add('hidden');
                    reviewItemsDoctor.classList.add('hidden');
                    reviewItemsClinic.classList.remove('hidden');
                } else {
                    selectReviews.classList.remove('hidden');
                    reviewItemsDoctor.classList.remove('hidden');
                    reviewItemsClinic.classList.add('hidden');
                }
            });
        }
     }

     // форма оставления отзыва

     let reviewForm = document.querySelector('.reviews-form');
     let reviewForma = document.querySelector('.reviews-form__form');
     let reviewFormInputName = this.getElementById('username');
     let reviewFormTextareaReview = this.getElementById('review');
     let reviewFormBody = document.querySelector('.reviews-form__body');
     let reviewFormClose = document.querySelector('.reviews-form__close');
     let reviewFormSuccess = document.querySelector('.reviews-form__success');
     let reviewFormSuccessClose = document.querySelector('.reviews-form__success-close');
     let reviewButtons = document.querySelectorAll('.review-button');

     if (reviewForm !== null) {

        for (let i = 0; i < reviewButtons.length; i++) {
            reviewButtons[i].addEventListener('click', function() {
            reviewForm.classList.add('show');
            reviewFormBody.classList.add('show');
            reviewFormBody.classList.add('visible');
            document.body.classList.add('overflow-hidden');
            });
         }
     

     reviewFormClose.addEventListener('click', function() {
        reviewFormBody.classList.remove('show');
        setTimeout(function() {
            reviewFormBody.classList.remove('visible');
            reviewForm.classList.remove('show');    
            document.body.classList.remove('overflow-hidden');
            reviewForma.reset();
        }, 500);
        
    });

    reviewForma.addEventListener('submit', function(event) {
        event.preventDefault();

        if (reviewFormInputName.value !== '' && reviewFormTextareaReview.value !== '') {

            let form_data = $(this).serialize();
            $.ajax({
                type: "GET", 
                url: "/",
                data: form_data,
                success: function() {

                    reviewFormBody.classList.remove('show');
                    setTimeout(function() {
                        reviewFormBody.classList.remove('visible');
                        reviewForma.reset(); 
                    }, 500);

                    reviewFormSuccess.classList.add('show');
                    reviewFormSuccess.classList.add('visible');
                }
           
            });
        }

    });

    reviewFormSuccessClose.addEventListener('click', function() {
        reviewFormSuccess.classList.remove('show');
        setTimeout(function() {
            reviewFormSuccess.classList.remove('visible');
            reviewForm.classList.remove('show');    
            document.body.classList.remove('overflow-hidden');
        }, 500);
    });

    }
     // форма оставления отзыва Селект

     let reviewFormSelect = document.querySelector('.reviews-form__form-select');
     let reviewFormSelectValue = document.querySelector('.reviews-form__form-select-value'); 
     let reviewFormSelectDrop = document.querySelector('.reviews-form__form-select-drop');
     let reviewFormSelectDropItems = document.querySelectorAll('.reviews-form__form-select-drop-item');
     let hiddenChooseDoctor = document.getElementById('choose-doctor');


     if (reviewFormSelect !== null) {

        hiddenChooseDoctor.value = reviewFormSelectValue.textContent;

        for (let item of reviewFormSelectDropItems) {
            item.addEventListener('click', function() {
                let val = item.getAttribute('data-value');
                hiddenChooseDoctor.value = val;
                reviewFormSelectValue.textContent = item.textContent;
            });
         }

        reviewFormSelect.addEventListener('click', function() {
            reviewFormSelectDrop.classList.toggle('active');
         });
    
         reviewFormSelect.addEventListener('blur', function() {
            if (reviewFormSelectDrop.classList.contains('active')) {
                reviewFormSelectDrop.classList.remove('active');
            }
         });


     }

     // форма оставления отзыва Переключатель

     let reviewFormSwitchers = document.querySelectorAll('.reviews-form__switcher');
     let hiddenReviewFormType = document.getElementById('reviews-form-type');
     let reviewFormGroupForSelect = document.querySelector('.reviews-form__form-group-select');

     if (reviewFormSwitchers !== null) {

        for (let i = 0; i < reviewFormSwitchers.length; i++) {
            reviewFormSwitchers[i].addEventListener('click', function() {
                if (!this.classList.contains('active')) {
                    for (let item of reviewFormSwitchers) {
                        if (item.classList.contains('active')) item.classList.remove('active');
                    }
                    this.classList.add('active');
                    if (i == 0) {
                        hiddenReviewFormType.value = 'about-doc';
                        reviewFormGroupForSelect.classList.remove('hidden');
                    } else {
                        reviewFormGroupForSelect.classList.add('hidden');
                        hiddenReviewFormType.value = 'about-clinic';
                    }
                }
            });
        }

     }


     




});