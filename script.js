document.addEventListener("DOMContentLoaded", () => {
  /* 1. Resaltar enlace activo según la página */
  const links = document.querySelectorAll(".nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  /* 2. Animación ligera en botones al pasar el ratón */
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => (btn.style.transform = "scale(1.05)"));
    btn.addEventListener("mouseleave", () => (btn.style.transform = "scale(1)"));
  });

  /* 3. Gestión del envío del formulario de contacto */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("¡Gracias por tu mensaje! Te responderemos pronto.");
      form.reset();
    });
  }
});
