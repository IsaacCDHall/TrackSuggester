
function cssDesign(question1, question2, question3, question4, question5) {
  if((question1 + question2 + question3 + question4 + question5) <= 5 ) {
    return true
  } else {
    return false
  }
}
function javaRuby(question1, question2, question3, question4, question5) {
  if((question1 + question2 + question3 + question4 + question5) <= 10 ) {
    return true
  } else {
    return false
  }
}
// function csharpPhp(question1, question2, question3, question4, question5) {
//   if((question1 + question2 + question3 + question4 + question5) <= 15 ) {
//     return true
//   } else {
//     return false
//   }
// }
console.log("yeeeeee");
// 3 functions here to enable us to use if statements inside of the jquery function for true false and reference to global functions. I have considered changing the return to be more specific in the global functions but feel as if that would just limit the usefulness of each. I will spend some time tinkering with this idea in the future.


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
    let result = ""

    if (cssDesign(question1, question2, question3, question4, question5) === true) {
      console.log("CSS True");
      // result = "Css and Design";
      $(".cssDesign").show();
      $(".javaRuby").hide();
      $(".csharpPhp").hide();
    } else if(javaRuby(question1, question2, question3, question4, question5) === true) {
      console.log("javaRuby True");
      // result = "Java/Ruby Track";
      $(".cssDesign").hide();
      $(".javaRuby").show();
      $(".csharpPhp").hide();
    } else {
      console.log("else statement");
      // result = "C# and PHP";
      $(".cssDesign").hide();
      $(".javaRuby").hide();
      $(".csharpPhp").show();
    }


    // $("#bestTrack").text(result);
  });
});
