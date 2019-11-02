



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


    if (numberStr.includes("3")) {
      numberStr = numberStr.replace(/3[0-9]|[0-9]3|3/g, "I'm sorry, Dave. I'm afraid I can't do that.");
    }
    if (numberStr.includes("2")) {
      numberStr = numberStr.replace(/2[0-9]|[0-9]2|2/g, "Boop!");
    }
    if (numberStr.includes("1")) {
      numberStr = numberStr.replace(/1[0-9]|[0-9]1|1/g, "Beep!");
    }

//this reg ex code is working, trying it in a for loop
    // if (numberStr.includes("2")) {
    //   numberStr = numberStr.replace(/2[0-9]|[0-9]2|2/g, "Boop!");
    // }
//
// for loop that doesn't work
//     for (var i = 3; i > 0; i--); {
//       if (numberStr.includes("i")) {
//         numberStr = numberStr.replace(/i[0-9]|[0-9]i|i/g, response[i]);
//       }
// }


console.log(numberStr);
    var result = numberStr;
    $("ul").html("<li>" + result + "</li>")

  });

});
