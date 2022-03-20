toggleBtn = document.querySelector(".toggle-socials");
socials = document.querySelector(".socials");

toggleBtn.addEventListener("click", () => {
  socials.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});
