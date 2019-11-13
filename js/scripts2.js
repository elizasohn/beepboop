

// var response[1] = "Beep!";
// var response[2] = "Boop!";
// var response[3] = "I'm Sorry, Dave. I'm afraid I can't do that.";
//
// for loop that doesn't work

//     for (var i = 3; i > 0; i--); {
//       if (numberStr.includes("i")) {
//         numberStr = numberStr.replace(/i[0-9]|[0-9]i|i/g, response[i]);
//       }
// }
// another for loop that doesn't work
// for (var i = 0; i <= numberInput; i++){
//   if ((numbers).contains((numbers[i]), 1)) {
//     (numbers.splice(i, 1, "Beep!"));
//   }
// }


function numberate(num) {

  var numbers = [];

  for (var i = 0; i <= num; i++){
    numbers.push(i);
  };
  var numberStr = numbers.join(", ");

  if (numberStr.includes("3")) {
    numberStr = numberStr.replace(/3[0-9]|[0-9]3|3/g, "I'm sorry, Dave. I'm afraid I can't do that.");
  }
  if (numberStr.includes("2")) {
    numberStr = numberStr.replace(/2[0-9]|[0-9]2|2/g, "Boop!");
  }
  if (numberStr.includes("1")) {
    numberStr = numberStr.replace(/1[0-9]|[0-9]1|1/g, "Beep!");
  }
  return numberStr;
  //doesn't work to turn back to array
  // numberArray = numberStr.split('');
  // return numberArray;
}

$(document).ready(function(){
  $("form#numberator").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#numberInput").val());

    var result = numberate(numberInput);

    $("ul").html("<li>" + result + "</li>")
    $(".resultArea").show();
    // doesn't work
    //$("form#inputForm")[0].reset();

  });
});
