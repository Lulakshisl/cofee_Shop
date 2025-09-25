// Simple interactivity
document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("✅ Item added to your order!");
  });
});
