

// var index = numbers.indexOf(1);
//
// if index
//
//
//
// for (var i = 0; i <= numberInput; i++){
//   if numbers[i] .replace(/[0-9]/g, "X")
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

    if (numberStr.includes("2")) {
      numberStr = numberStr.replace(/2[0-9]|[0-9]2|2/g, "Boop!");
    }

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
