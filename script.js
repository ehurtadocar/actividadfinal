// Tema claro/oscuro
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll suave en navegación (enlaces internos)
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });

    // Marca activa en navegación
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});

// Formulario (alerta simulada)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Te responderemos pronto.");
  this.reset();
});
