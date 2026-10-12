// ================= CONFIGURACIÓN =================
// Reemplaza por tu número: código de país (54) + 9 + código de área sin 0 + número sin 15.
// Ejemplo para Aluminé (2942): "5492942123456"
const WHATSAPP = "5492942650209";
// =================================================

document.querySelectorAll(".js-wa").forEach(a => {
  const msg = encodeURIComponent(a.dataset.msg || "Hola, quiero consultar por una página web.");
  a.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
  a.target = "_blank";
  a.rel = "noopener";
});

document.getElementById("year").textContent = new Date().getFullYear();

// Animación al hacer scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
