// Menu page interactions
document.addEventListener("DOMContentLoaded", () => {
  console.log("Menu Page Loaded ✅");

  // Example: highlight today's special item
  const specials = ["Latte", "Croissant"];
  document.querySelectorAll(".menu-item h3").forEach(item => {
    if (specials.includes(item.textContent)) {
      item.style.color = "#d84315"; // highlight in orange
    }
  });
});
