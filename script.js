$(".hamburger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

var hamburger = $("a.hamburger");
hamburger.on("click", function () {
  $(this).toggleClass("clicked");
});

$(".navlinks li a").on("click", function () {
  $(".hamburger").click();
});


                AOS.init({
                    duration: 1500
                });


 $(document).ready(function () {
        $('#toggle').click(function() {
           $(this).toggleClass('active');
           $('#fullnav').toggleClass('open');
          });
          });