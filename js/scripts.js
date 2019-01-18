$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var side1 = $(".side1");
    var side2 = $(".side2");
    var side3 = $(".side3");

    if ((side1 === side2) && (side2 === side3)) {
      $("#equilateral").show();
    }
    if (side1 === side2)

    event.preventDefault();
  });
});
