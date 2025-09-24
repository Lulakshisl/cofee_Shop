// Navbar glow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.boxShadow = window.scrollY > 50 ? "0 2px 15px rgba(0,0,0,0.5)" : "none";
});

// Smooth scroll (for future anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
