$(document).ready(function () {
    $(".go-top a").click(function () {
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top;
      $("body,html").animate({ scrollTop: destination }, 1100);
    });
  });