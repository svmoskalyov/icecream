$(".reviews__slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    dots: true,
});

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobilePhBtn = document.querySelector("[ph-btn]");
  
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle('overflow');
    mobilePhBtn.classList.toggle("active");
  });
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle('overflow');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-cooperation-open]"),
    closeModalBtn: document.querySelector("[data-modal-cooperation-close]"),
    modal: document.querySelector("[data-modal-cooperation]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-cooperation");
        document.body.classList.toggle('overflow');
  }
})();

$('.nav__link').click(function () {
  $('.mobile-menu').removeClass('is-open');
  $('.menu-btn').removeClass('is-open');
  $('.page-header__btn').removeClass('active');
  $('body').removeClass('overflow');
});
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-map-open]"),
    closeModalBtn: document.querySelector("[data-modal-map-close]"),
    modal: document.querySelector("[data-modal-map]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-map");
        document.body.classList.toggle('overflow');
  }
})();
