!function(){var e,o,t;$(".reviews__slider").slick({infinite:!0,arrows:!1,autoplay:!0,dots:!0}),e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),t=document.querySelector("[ph-btn]"),e.addEventListener("click",(function(){var n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),o.classList.toggle("is-open"),document.body.classList.toggle("overflow"),t.classList.toggle("active")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("overflow")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-cooperation-open]"),closeModalBtn:document.querySelector("[data-modal-cooperation-close]"),modal:document.querySelector("[data-modal-cooperation]")};function o(){e.modal.classList.toggle("is-hidden-cooperation")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),$(".nav__link").click((function(){$(".mobile-menu").removeClass("is-open"),$(".menu-btn").removeClass("is-open"),$(".page-header__btn").removeClass("active"),$("body").removeClass("overflow")}))}();
//# sourceMappingURL=index.8f4eb7b7.js.map
