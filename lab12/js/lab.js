/**
 * Author:    Jorge
 * Created:   06.06.2022
 *
 * (c) Copyright by Blub Corp.
 **/

//Task 2, Step 2 - Create a function sortingHat()//

//Step 2, Part 1 - that takes a string as an argument: function sortingHat(str)//
 function sortingHat(str) {
//Step 2, Part 2- counts the letters in str and assigns it to a variable length//
   len = str.length;
//Step 2, Part 3- uses modulus (% operator) to get the remainder with 4: mod = length % 4;
   mod = len % 4;
//Step 2, Part 4- create a conditional that will return Gryffindor,//
//Ravenclaw, Slytherin, and Hufflepuff depending on whether//
//the value of mod is 0, 1, 2, or 3//
   if (mod == 0) {
     return "Gryfindor";
   } else if (mod == 1) {
     return "Slytherin";
   } else if (mod == 2) {
     return "Raven Claw";
   } else if (mod == 3) {
     return "Huffle Puff";
   }
}

 var button = document.getElementById('button');
 button.addEventListener('click', function() {
   var name = document.getElementById('input').value;
   var house = sortingHat(name);
   prompt =  "<p>The Sorting Hat has sorted you into " + house + " ... Welcome " + name + "</p>";
   document.getElementById("output").innerHTML = prompt
 });
