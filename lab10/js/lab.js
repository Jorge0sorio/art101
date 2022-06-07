/**
 * Author:    Jorge
 * Created:   06.06.2021
 *
 * (c) Copyright by Blub Corp.
 **/

 //Runs that value through your sort() or anagram() function and saves the results.//
      function anagram(){
            //Gets the value of your input field//
            //Runs that value through your sort() or anagram() function and saves the results.//
           var userName = document.getElementById('user-name').value;
           console.log("userName=",userName);
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

      //Attach an event listener to your button that does the following//
      var button = document.getElementById('button');
      button.addEventListener('click', function() {
          var anagramed = anagram();
          blurb =  "<p>Here is your ananagramed- ananangram- Anagramed Name!:" + anagramed +"</p>";
          //Replaces the html in <div id=output> with the results.
          document.getElementById("output").innerHTML = blurb
      });
