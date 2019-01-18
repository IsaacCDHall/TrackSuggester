
function cssDesign(question1, question2, question3, question4, question5) {
  if((question1 + question2 + question3 + question4 + question5) <= 8 ) {
    return true
  } else {
    return false
  }
}
function javaRuby(question1, question2, question3, question4, question5) {
  if((question1 + question2 + question3 + question4 + question5) <= 13 ) {
    return true
  } else {
    return false
  }
}

//jQuery
console.log("yo");
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    let question1 = parseInt($('#question1Input').val());
    let question2 = parseInt($('#question2Input').val());
    let question3 = parseInt($('#question3Input').val());
    let question4 = parseInt($('#question4Input').val());
    let question5 = parseInt($('#question5Input').val());
    // let result = ""

    if (cssDesign(question1,  question2, question3, question4, question5) === true) {
      console.log("CSS True");
      // result = "Css and Design"; saving this as reference for another solution to display
      $(".cssDesign").show();
      $(".javaRuby").hide();
      $(".csharpPhp").hide();
      $("#form-body").hide();
      $("#header").hide();
      $("#results-header").show();
    } else if(javaRuby(question1, question2, question3, question4, question5) === true) {
      console.log("javaRuby True");
      // result = "Java/Ruby Track"; saving this as reference for another solution to display
      $(".cssDesign").hide();
      $(".javaRuby").show();
      $(".csharpPhp").hide();
      $("#form-body").hide();
      $("#header").hide();
      $("#results-header").show();
    } else {
      console.log("else statement trigger");
      // result = "C# and PHP"; saving this as reference for another solution to display
      $(".cssDesign").hide();
      $(".javaRuby").hide();
      $(".csharpPhp").show();
      $("#form-body").hide();
      $("#header").hide();
      $("#results-header").show();
    }


    // $("#bestTrack").text(result); saving this as reference for another solution to display

  });
});
