// =====================================
// Sett årstall automatisk
// =====================================
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // =====================================
  // Mobilnavigasjon
  // =====================================
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Lukk meny' : 'Åpne meny');
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Åpne meny');
      });
    });
  }
});

// =====================================
// Lightbox for bildegalleri
// =====================================
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!galleryImages.length || !lightbox || !lightboxImg) return;

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".moviegallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!galleryImages.length || !lightbox || !lightboxImg) return;

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    });
});
