$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var sentenceInput = $("input#sentence").val();

    $(".sentence").text(sentenceInput.toUpperCase());


    $("#capslock").show();

    event.preventDefault();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

    $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");
  });
});
