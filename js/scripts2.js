

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
    replacedStr = numberStr.replace(/1\d/g, "Beep!");
    console.log(replacedStr);

    // var result = ones(numberInput)
    // $("ul").html("<li>" + result + "</li>")
    //numberstring = numbers.join(", ");
    //console.log(numberstring);

  });

});
