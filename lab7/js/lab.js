/**
 * Author:    Jorge
 * Created:   05.04.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 //Step 2 of Task 2
 function retrieveUserName(){
      //Step 3 of Task 2
      var userName = window.prompt("The lab is asking me to ask YOU for your username. Please provide that to me right now!");
      console.log("userName=",userName);
      //Step 4 of Task 2
      //changed to an array
      var usernameArray = userName.split('');
      console.log("usernameArray=", usernameArray);
      //sorting the array
      var usernameArraySort = usernameArray.sort();
      console.log("usernameArraySort=", usernameArraySort);
      //array turend back to string
      var sortedUsername = usernameArraySort.join();
      console.log("sortedUsername=", sortedUsername);
      //Step 5 of Task 2
      return sortedUsername;
 }


 //Step 6 of Task 2
 document.writeln("Each letter of your name has been cleaned thoroughly but to be returned to its original state requires a fee: ",
      retrieveUserName(), "</br>");
