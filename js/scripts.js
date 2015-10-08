$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var sentenceInput = $("input#sentence").val();

    $(".sentence").text(sentenceInput.toUpperCase());


    $("#capslock").show();

    event.preventDefault();
  });
});
