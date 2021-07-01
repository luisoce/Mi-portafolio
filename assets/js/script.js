// INCORPORANDO SMOOTHSCROLL
$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();
    var gato = this.hash;

    $("html").animate(
      {
        scrollTop: $(gato).offset().top - 86,
      },
      800
    );
  });
});
// INCORPORANDO TOOLTIP BOOTSTRAP 4.6
$('[data-toggle="tooltip"]').tooltip()
// INCORPORANDO POPOVER BOOTSTRAP 4.6
$('[data-toggle="popover"]').popover()