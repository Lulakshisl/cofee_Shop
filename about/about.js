// Highlight active page in nav
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
    }
  });
});
