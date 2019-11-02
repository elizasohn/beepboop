
response[3] = "I'm sorry, Dave. I'm afraid I can't do that."
response[2] = '"Boop!"'
response[1] = "Beep!"

for (var i = 3, i > 0; i--);
  if (numberStr.includes("i")) {
    numberStr = numberStr.replace(/i[0-9]|[0-9]i|i/g, response[i]);



//
// if (numberStr.includes("3")) {
//   numberStr = numberStr.replace(/3[0-9]|[0-9]3|3/g, "I'm sorry, Dave. I'm afraid I can't do that.");
// }
// if (numberStr.includes("2")) {
//   numberStr = numberStr.replace(/2[0-9]|[0-9]2|2/g, "Boop!");
// }
// if (numberStr.includes("1")) {
//   numberStr = numberStr.replace(/1[0-9]|[0-9]1|1/g, "Beep!");
// }


$(document).ready(function(){
  $("form#numberator").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#numberInput").val());

    var numbers = [];
    for (var i = 0; i <= numberInput; i++){
      numbers.push(i);
      console.log(numbers);
    };
    var numberStr = numbers.join(", ");

//this reg ex code is working, trying it in a for loop
    // if (numberStr.includes("2")) {
    //   numberStr = numberStr.replace(/2[0-9]|[0-9]2|2/g, "Boop!");
    // }







    // if (numberStr.includes("3")) {
    //   numberStr = numberStr.replace(/^3/g, "I'm sorry Dave, I'm afraid I can't do that.")
    //
    // }


    //
    // replacedStr = numberStr.replace(/1\d/g, "Beep!");
    // console.log(replacedStr);
console.log(numberStr);
    // var result = ones(numberInput)
    // $("ul").html("<li>" + result + "</li>")
    //numberstring = numbers.join(", ");
    //console.log(numberstring);

  });

});
