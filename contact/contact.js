// Handle contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.textContent = "✅ Thank you! Your message has been sent.";
    message.style.color = "green";
    form.reset();
  });

  // Highlight active page
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
    }
  });
});
