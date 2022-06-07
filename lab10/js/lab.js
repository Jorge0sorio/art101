/**
 * Author:    Jorge
 * Created:   06.06.2021
 *
 * (c) Copyright by Blub Corp.
 **/

 //Attach an event listener to your button that does the following//
  var button = document.getElementById('my-button');
  button.addEventListener('click', function() {
 //Gets the value of your input field//
      inputValue = document.getElementById('user-name').value;
      console.log("inputValue", inputValue);

 //Runs that value through your sort() or anagram() function and saves the results.//
      function retrieveUserName(){
           //Step 4 of Task 2
           console.log("inputValue", inputValue);
           //changed to an array
           var usernameArray = inputValue.split('');s
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
      //Replaces the html in <div id=output> with the results.//
      document.writeln("please print",
           retrieveUserName(), "</br>");
  });






























 //Attach an event listener to your button that does the following//
  var button = document.getElementById('my-button');
  button.addEventListener('click', function retrieveUserName(){
           //Step 4 of Task 2
           inputValue = document.getElementById('my-input').value;
           console.log("inputValue", inputValue);
           //changed to an array
           var usernameArray = inputValue.split('');s
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
      //Replaces the html in <div id=output> with the results.//
      document.writeln("please print",
           retrieveUserName(), "</br>");
  });
