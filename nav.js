var activator = $("#activator");
var navBg = $("#fade-bg");

activator.on("click", function () {
  $(this).toggleClass("active");
  $("#activate-menu").toggleClass("visible");
  navBg.fadeToggle();
});

navBg.on("click", function () {
  $("#activate-menu").removeClass("visible");
  $(activator).removeClass("active");
  $(this).hide();
});
