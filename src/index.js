$(".reviews__slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    dots: true,
});

document.querySelector('.menu-btn').addEventListener('click',()=> {
document.querySelector('.mobile-menu').classList.toggle('active');
document.querySelector('.menu-btn').classList.toggle('active');
document.querySelector('.page-header__btn').classList.toggle('active');
document.body.classList.toggle('overflow');
});


