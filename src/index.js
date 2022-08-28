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
    mobilePhBtn.classList.toggle("active");
  });
})();
