var numberInput
var numbers = [];

for (var i = 0; i <= numberInput; i++){
  if ((numbers).contains((numbers[i]), 1)) {
    (numbers.splice(i, 1, "Beep!"));
  }
}
numberstring = numbers.join(", ");
console.log(numberstring);
  console.log(numbers);



$(document).ready(function(){
  $("form#numberator").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#numberInput").val());

    var ones = ["1", "10"];

    // function contains(number, digit) {
    //     if (number < 0) { // make sure negatives are dealt with properly, alternatively replace this if statement with number = Math.abs(number)
    //         number *= -1;
    //     }
    //     if (number == digit) { // this is to deal with the number=0, digit=0 edge case
    //         return true;
    //     }
    //     while (number != 0) { // stop once all digits are cut off
    //         if (number % 10 == digit) { // check if the last digit matches
    //             return true;
    //         }
    //         number = Math.floor(number / 10); // cut off the last digit
    //     }
    //     return false;
    // }
    //
    // // userInput to counted out number
    // for (var i = 0; i <= numberInput; i++){
    //   numbers.push(i);
    // }
    // //

    // numbers = numbers.map(String);


    // for (var i = 0; i <numbers.length; i++){
    //   if (ones.includes(numbers[i])); {
    //     numbers.splice(i, 1, "Beep!");
    //   }
    // }


    var numberInput
    var numbers = [];

    for (var i = 0; i <= numberInput; i++){
      if ((numbers).contains((numbers[i]), 1)) {
        (numbers.splice(i, 1, "Beep!"));
      }
    }
    numberstring = numbers.join(", ");
    console.log(numberstring);
      console.log(numbers);

  })






})
