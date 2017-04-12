"use strict";
//IIFE function.. keeps variable out of global scope.. secure!!
(function(){

var name;
do {
    name = prompt("Hello, what is your name?");
}while(name === "null" || name === "");
    alert("Welcome, " + name + "! Thank you for your cooperation.");

var likePizza = confirm("Do you like pizza? \n Click ok for yes and cancel for no.");
if (likePizza){
    alert("Awesome! the pizza is on the way");
}else{
    alert("Sorry but I'm going to ask you to leave.");
}
// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.


//   ** Bonus Exercise**

function registration(){
    var registered
    var users = "bigLarry";
    var password = "secret";
    registered = confirm("Hello. Are you a registered user?");
    if (registered){
        var userName = prompt("Please enter your user name.");
        if (userName === users){
            var passwordEntered = prompt("Please enter your password");
            if (passwordEntered === password){
                alert("Welcome " + userName);
            }else{
                passwordEntered = prompt("Sorry that does not match our records. \nPlease enter your password.");
            }
        }else {
            userName = prompt("Sorry we do not have record of that user. \nPlease enter your user name.");
        }
    }else {
        var newUser = prompt("Please register your new user name");
        var newUserPassword = prompt("Please enter a password");
        alert("Welcome " + newUser + ". Please keep your login information for future use.")
    }
}

registration();

})();