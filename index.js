document.addEventListener("DOMContentLoaded", () => {

  /* HEADER SCROLL */ 
  const header = document.getElementById("mainHeader");

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 50);
  });

  /* HAMBURGUESA */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  /* BOTONES */
  const moreBtn = document.getElementById("moreToggle");
  const compulsasBtn = document.getElementById("compulsasToggle");

  /* MÁS */
  if (moreBtn) {
    moreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      moreBtn.parentElement.classList.toggle("is-open");
    });
  }

  /* COMPULSAS */
  if (compulsasBtn) {
    compulsasBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      compulsasBtn.parentElement.classList.toggle("is-open");
    });
  }

  /* SUBMENÚ MOBILE */
  document.querySelectorAll(".menu-item.has-submenu > a")
    .forEach(link => {
      link.addEventListener("click", e => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          link.nextElementSibling.classList.toggle("open");
        }
      });
    });

  /* CLICK FUERA (CIERRA TODO) */
  document.addEventListener("click", () => {
    moreBtn?.parentElement.classList.remove("is-open");
    compulsasBtn?.parentElement.classList.remove("is-open");

    nav.classList.remove("active");
    toggle.classList.remove("active");
  });

  /* CERRAR MENÚ AL HACER CLICK EN LINK */
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    });
  });

});