const header = document.querySelector(".chaser");
const flechaArriba = document.querySelector(".flecha-arriba");

/* APARECE ENCABEZADO */
window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.style.display = "block";
    header.style.transition = "all 0.75s ease";
  } else {
    header.style.display = "none";
  }
  header.hidden = this.scrollY < document.documentElement.clientHeight;
});

/* CUANDO CLICAS flechaArriba, VUELVES AL INICIO */
flechaArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* NO APARECE BOTÓN FLECHA, CUANDO ESTÁS EN EL INICIO */
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    flechaArriba.style.display = "none";
  } else {
    flechaArriba.style.display = "block";
  }
  flechaArriba.hidden = this.scrollY < document.documentElement.clientHeight;
});

/* MENU HAMBURGUESA MOSTRAR / OCULTAR: */
var menu = document.querySelector(".hamburger");

function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

menu.addEventListener("click", toggleMenu, false);
