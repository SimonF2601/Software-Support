const hamBurger = document.querySelector(".toggle-btn");

/**
 * Itera el menu desplgable de la izquierda
 */
hamBurger.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
  });
  