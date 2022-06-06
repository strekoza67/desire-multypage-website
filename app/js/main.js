$(function () {
  $('.header__btn').on('click', () => {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', () => {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });
});





// let menu = document.querySelector('.rightside-menu'),
//   menuBtn = document.querySelector('.header__btn'),
//   closeMenu = document.querySelector('.rightside-menu__close');

// menuBtn.addEventListener('click', () => {
//   menu.classList.remove('rightside-menu--close');
// });
// closeMenu.addEventListener('click', () => {
//   menu.classList.add('rightside-menu--close');
// });