/**
 * Author:    Jorge
 * Created:   06.06.2021
 *
 * (c) Copyright by Blub Corp.
 **/

 //Using jQuery, create buttons to add to the challenge, problems, and results//
 //sections of your document//

$("#challenge").append("<button>My First Button</button>");

$("#problems").append("<button>My Second Button</button>");

$("#results").append("<button>My Third Button</button>");

//Add a click event to each button//
$("button").click(function(){
    //Toggle a class special within the <div> of the section//
  	$("#challenge").toggleClass("special");
	});

//Add a click event to each button//
$("button").click(function(){
      //Toggle a class special within the <div> of the section//
    	$("#problems").toggleClass("special");
  	});

//Add a click event to each button//
$("button").click(function(){
        //Toggle a class special within the <div> of the section//
      	$("#results").toggleClass("special");
    	});
      
