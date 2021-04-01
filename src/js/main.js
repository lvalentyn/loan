
/* Jquery */
$(document).ready(function () {
    // burger 
    // const brg = document.querySelector('.burger');
    // $('.burger').click(function () {
    //     $('.burger, .navbar__menu').toggleClass('active');
    // });
    // $('.burger, .navbar__menu').click(function () {
    //     $('.burger, .navbar__menu').removeClass('active');
    // });
    // navmenu on scroll
    // $(window).scroll(function () {
    //     if (this.scrollY > 40) {
    //         $('.navbar').addClass('sticky');
    //     } else {
    //         $('.navbar').removeClass('sticky');
    //     }
    // });
    // slick-sliders
    // $('.benefits__slider').slick({
    //     infinite: true,
    //     dots: false,
    //     arrows: true,
    //     speed: 2000,
    //     swipe: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     pauseOnHover: false,
    //     slidesToShow: 4,
    //     prevArrow: '<button type="button" class="my-slick-prev"></button>',
    //     nextArrow: '<button type="button" class="my-slick-next"></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1600,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 1280,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 fade: true
    //             }
    //         }
    //     ]
    // });
    // modal

    // header btns
    // $('.infoblock__btn, .nav__btn').on('click', function () {
    //     $('.overlay, #consultation').fadeIn('slow');
    // });
    // $('.modal__close').on('click', function () {
    //     $('.overlay, #consultation, #thanks').fadeOut('slow');
    // });

    // для вывода окна "подтверждение заявки"
    // $('form').submit(function (e) {
    //     e.preventDefault();/* отключаем перезагрузку страницы */
    //     $(this).find("input").val("");
    //     $('#consultation').fadeOut();
    //     $('.overlay, #thanks').fadeIn('slow');
    //     $('form').trigger('reset');
    // });
    // mailer
    //   $('form').submit(function (e) {
    //     e.preventDefault();/* отключаем перезагрузку страницы */
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         $(this).find("input").val("");
    //         $('#consultation').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });
    // маска телефон
    let inputs = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+38(999) 999-99-99');
    im.mask(inputs);
    // плавная прокрутка
    $("a[href]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    // Animations
    const animItems = document.querySelectorAll('._anim-items');
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 3;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-off')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }
});