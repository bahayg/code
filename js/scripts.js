$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("input#gender").val();

    if (age && gender) {
      console.log("first  branch")
      var quote = (100 - age) * 3;
        if (gender === 'male' && age < 26) {
          quote += 50;
        }

      $("#rate").empty().append(quote);
      $("#quote").show();
    } else if (!age){
      $("#helpBlock1").show();
    }

    if (!gender){
      $("#helpBlock2").show();
    }
    event.preventDefault();
  });
});
