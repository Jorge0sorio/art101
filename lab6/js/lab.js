/**
 * Author:    Jorge
 * Created:   5.25.2022
 *
 * (c) Copyright by Blub Corp.
 **/



//Define Variables
myTransport = [
   " Feet", " Loop"," Metro"," Friend's Cars", " Naomi's Car",
 ]

myMainRide = {
  make : "Toyota",
  model : "Matrix",
  color : "Brown",
  year : 2022,
};



 // Outputs of variables
 document.writeln("How I Get Around Campus:" + myTransport + "<br>");
 document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
