document.addEventListener("DOMContentLoaded", function () {
  const featuresNavLink = document.querySelector(".nav-link.dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  let clickCount = 0;

  featuresNavLink.addEventListener("click", function (event) {
    if (window.innerWidth < 1200) {
      if (clickCount === 0) {
        event.preventDefault();
        dropdownMenu.style.display = "block";
      } else {
        window.location.href = event.target.href;
      }
      clickCount++;
    } else {
      window.location.href = event.target.href;
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1200) {
      dropdownMenu.style.display = "none";
      clickCount = 0;
    }
  });
});
