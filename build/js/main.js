
// slider
let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 5000);
/* burgermenu */
const menu = document.querySelector('.navbar__menu'),
    menuItems = document.querySelectorAll('.navbar__item'),
    hamburger = document.querySelector('.burger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
});
menuItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        menu.classList.toggle('active')
    })
});
// navmenu on scroll
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (this.scrollY > 40) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
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