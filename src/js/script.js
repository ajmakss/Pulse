$(document).ready(function(){
    $('.caroulsel__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-icon.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-icon.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
      });
});
              

// Tabs

function tabs (headerSelector, tabSelector, contentSelector, activeSelector, display = 'flex'){
    const header = document.querySelector(headerSelector),
          tab= document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeSelector);
        });
    }
    
    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeSelector);
    }
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;

        if( target == e.target && 
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
             target.parentNode.classList.contains(tabSelector.replace(/\./, "")) )) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item ) {
                    hideTabContent();
                    showTabContent(i);
                }
            });

        }
    });
}

    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content',  'catalog__tab_active');

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal
    
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
        $('body').css('overflow','hidden');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        $('body').css('overflow','visible');
     
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay,  #order').fadeIn('slow');
            $('body').css('overflow','hidden');
        })  
    })


    //Forms validation

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                }
            },
                messages: {
                    name: {
                        required: 'Пожалуйста, введите свое имя',
                        minlength: jQuery.validator.format("Введите {0} символa!")
                    },
                    phone: 'Пожалуйста, введите свой номер телефона',
                    email: {
                        required: 'Пожалуйста введите свою почту',
                        email: 'Неправильно введен адрес почты'
                    }
                },
    
        });
    }
    validateForm('#consultation-form');
    validateForm('#consultation form')
    validateForm('#order form');

    $('input[name="phone"').mask("+7 (999) 999-99-99")
