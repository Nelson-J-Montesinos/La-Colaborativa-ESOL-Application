document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navModal = document.querySelector(".navigation-modal");

  // Open menu (slide down)
  menuIcon.addEventListener("click", function () {
    navModal.classList.remove("slide-up"); // reset in case
    navModal.classList.add("active");
  });

  // Close menu (slide up)
  closeIcon.addEventListener("click", function () {
    navModal.classList.remove("active");
    navModal.classList.add("slide-up");

    // Cleanup after animation finishes
    setTimeout(() => {
      navModal.classList.remove("slide-up");
    }, 400);
  });
});
