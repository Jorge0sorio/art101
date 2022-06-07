/**
 * Author:    Jorge
 * Created:   05.18.2021
 *
 * (c) Copyright by Blub Corp.
 **/


console.log("JS running");




function fizzBuzz() {
  console.log("function running");
  for (var i=1; i<200; i++){
    var str = '';
    if (i % 3 == 0){
      str += "Fizz!";
    }
    if (i % 5 == 0) {
      str += "Buzz";
    }
    if (i % 7 ==0){
      str += "Boom";
    }
    // this is so that it prints a number for the numbers that aren't multiples
    if (str == ''){
      str + 1;
    }
    $("#output").append("<p>" + str + )
  }
}

fizzBuzz()



 //Loop through numbers 1 to 200, listing them as you go
for (var i=1; i<200; i++){
//multiple of 3 AND 5, it should print FizzBuzz!
if (i%15==0){
  console.log("FizzBuzz!");
}
//multiple of 3 AND 7, it should print FizzBoom!
if (i%21==0){
  console.log("FizzBoom!");
}
//multiple of 5 AND 7, it should print BuzzBoom!
if (i%35==0){
  console.log("BuzzBoom!");
}
//multiple of 3, 5 AND 7, it should print FizzBuzzBoom!
if (i%105==0){
  console.log("FizzBuzzBoom!");
}
  //If the number is a multiple of 3, if should print "Fizz!"
  if (i%3==0){
    console.log("Fizz!");
  //If the number is a multiple of 5, it should print "Buzz!"
  }
  else if (i%5==0){
    console.log("Buzz!");
  }
//If the number is a multiple of 7, it should print "Boom!"
  else if (i%7==0){
    console.log("Boom!");
  }
//this will print the phrase instead of number
  else {
    console.log(i);
  }
}
