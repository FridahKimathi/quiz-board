// BUSINESS LOGIC
var sum = 0;
function scoreCalculator(userValue) {
  var names = ["js", "year", "framework","function","dom","link"];
  names.forEach(function(name) {
    var userValue = $("input:radio[name=" + name + "]:checked").val();
    if(userValue === "10") {
      sum+=10;
    }
  });
}


// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#start-btn").click(function() {
    event.preventDefault();
    var userFirstName = $("#firstName").val();
    var userSecondName = $("#secondName").val();
    var UserDetails=$(".details").val();
    if(userFirstName.length === 0 || userSecondName.length === 0) {
      $("#no-name").show();
      $("#firstName").addClass("enter-name");
      $("#secondName").addClass("enter-name");
    } if(UserDetails.length ===0){
        $(".detail").show();
    }
    else {
      $("#intro").hide();
      $("#form1").show();
    }
  })
  $("#next").click(function() {
    $("#form1").hide();
    $("#form2").show();
  })
  $("#submit").click(function() {
    event.preventDefault();
    $("#score").show();
    $("#form2").hide();
    scoreCalculator();
    var userFirstName = $("#firstName").val();
    var userSecondName = $("#secondName").val();
    if(sum <= 30) {
      $(".text center name-display").text(`Nice try!`);
      $("#nice-try").show();
    }
    else {
      $(".text center name-display").text(`Congratulations!`);
      $("#congrats").show();
    }
    $(".scoreDisplay").text(sum + "/60");
  })
  $("#retake").click(function() {
    event.preventDefault();
    location.reload();
  })
})