function closeNavbar() {
 var navbarToggler = document.querySelector('.navbar-toggler');
 var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

 if (windowWidth <= 1199.98 && !navbarToggler.classList.contains('collapsed')) {
  navbarToggler.click();
 }
}