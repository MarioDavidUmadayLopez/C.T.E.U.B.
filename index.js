document.addEventListener("DOMContentLoaded", () => {

  /* ================= HEADER SCROLL ================= */
  const header = document.getElementById("mainHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  });

  /* ================= MENU HAMBURGUESA ================= */
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");

  menuToggle?.addEventListener("click", e => {
    e.stopPropagation();
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
  });

  /* ================= DROPDOWNS ================= */
  const dropdowns = document.querySelectorAll(
    ".compulsas-wrapper, .more-wrapper"
  );

  dropdowns.forEach(drop => {
    const btn = drop.querySelector("button");

    btn?.addEventListener("click", e => {
      e.stopPropagation();

      dropdowns.forEach(d => {
        if (d !== drop) d.classList.remove("is-open");
      });

      drop.classList.toggle("is-open");
    });
  });

  /* ================= BUSCADOR ================= */
  const searchWrapper = document.querySelector(".search-wrapper");
  const searchBtn = document.getElementById("searchToggle");

  searchBtn?.addEventListener("click", e => {
    e.stopPropagation();
    searchWrapper.classList.toggle("open");
    searchWrapper.querySelector("input")?.focus();
  });

  /* ================= SUBMENÚS MOBILE ================= */
  document.querySelectorAll(".menu-item.has-submenu > a")
    .forEach(link => {
      link.addEventListener("click", e => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          const submenu = link.nextElementSibling;
          submenu.classList.toggle("open");
        }
      });
    });

  /* ================= CLICK FUERA ================= */
  document.addEventListener("click", () => {
    dropdowns.forEach(d => d.classList.remove("is-open"));
    searchWrapper?.classList.remove("open");
  });
  /Uniendo a Backend/
  fetch("/api/noticias?year=2025&month=12")

});