$(".reviews__slider").slick({infinite:!0,arrows:!1,autoplay:!0,dots:!0}),(()=>{const e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),t=document.querySelector("[ph-btn]");e.addEventListener("click",(()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),o.classList.toggle("is-open"),document.body.classList.toggle("overflow"),t.classList.toggle("active")}))})(),$(".nav__link").click((function(){$(".mobile-menu").removeClass("is-open"),$(".menu-btn").removeClass("is-open"),$(".page-header__btn").removeClass("active"),$("body").removeClass("overflow")})),(()=>{const e={openModalBtn:document.querySelector("[data-modal-cooperation-open]"),closeModalBtn:document.querySelector("[data-modal-cooperation-close]"),modal:document.querySelector("[data-modal-cooperation]")};function o(){e.modal.classList.toggle("is-hidden-cooperation")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.e926f022.js.map
