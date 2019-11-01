
// userInput to counted out number
// for (var i = 0; i <= numberInput; i++) {
//   console.log("hi");
//   var number = [];
//   number.push[i];
// }
// console.log(number);

// if (number.includes(3)) {
// return("I'm sorry Dave, I'm afraid I can't do that");
// }
// else if (number.includes(2)){
// change all numbers to BOOP
// }
// else if (number includes(1)){
// change all numbers to BEEP
// }
//


$(document).ready(function(){
  $("form#numberator").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#numberInput").val());
    var number = [];

    for (var i = 0; i <= numberInput; i++){
      number.push(i);
    }

    for (var i = 0; i <= number.length; i++){
      if (number.includes(10)) {
        number.splice((number.indexOf(10)), 1, "Beep!");
      }
    }
  numberstring = number.join(", ");
  console.log(numberstring);
  })






})
