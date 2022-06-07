/**
 * Author:    Jorge
 * Created:   5.9.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 var outputEl =
   document.getElementById("output");
 //t2 step 3

 //creating a new element
 var new1El =
   document.createElement("h2");
 //creating an id for the element
 new1El.id = "header";

 //changing the text of the new element
 new1El.innerHTML = "Not a bad word!";

 //this appends my new element to my div
 outputEl.appendChild(new1El);

 //changing CSS of the text
 document.getElementById("header").
   style.color = "blue";


var outputEl =
  document.getElementById("ouput");

var new2E1 =
  document.createElement("h3");

new2El.id = "misc";

new2El.innerHTML = "Enter the matrix O_o";

outputEl.appendChild(new2El);
