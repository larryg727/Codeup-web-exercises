"use strict";
//  IIFE function.. eliminates global scope and makes more secure!!
(function () {


    var myNameIs = 'Larry'; // TODO: Fill in your name here.
    function sayHello(name) {
        var messageHello;
        messageHello = "Hello " + name;
        return messageHello;
    }

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     *  > sayHello("codeup") // returns "Hello, codeup!"
     */
    sayHello(myNameIs);
    var helloMessage = sayHello(myNameIs);

    console.log(helloMessage);

    /**
     * TODO:
     * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
     * Store the result of the function call in a variable named 'helloMessage'.
     * console.log 'helloMessage' to check your work
     */

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
    var random = Math.floor((Math.random() * 100) + 1);
    var message = "";

    function isOdd(number) {
        message += (number % 2 !== 0) ? number + " is odd." : number + " is NOT odd.";
        return message;
    }

    /**
     * TODO:
     * Create a function called 'isOdd' that takes a number as a parameter.
     * The function should use the ternary operator to return a message.
     * The message should contain the number being checked, and whether or not the
     * number is odd
     *
     * Example
     *  > isOdd(42) // returns "42 is not odd!"
     */

    isOdd(random);
    console.log(message);
    /**
     * TODO:
     * Call the function 'isOdd' passing the variable 'random' as a parameter.
     * console.log *outside of the function* to check your work
     */

    function randomGenorator(max, min) {
        max -= min;
        random = Math.floor(Math.random() * max) + min;
        return random;
    }

    var randomTry = randomGenorator(20, 10);
    console.log(randomTry);

    function dateMachine() {
        var inputDate;
        do {
            inputDate = prompt("Please enter a date to convert in the following format: \n dd/mm/yy");
        } while (inputDate === null || inputDate === "");
        var dD;
        var mM;
        var yY;

        function dateSeporator(date) {
            var dateArray = date.split("/");
            dD = dateArray[0];
            mM = dateArray[1];
            if (dateArray[2] > 25) {
                yY = " 19" + dateArray[2];
                return yY;
            } else {
                yY = " 20" + dateArray[2];
                return yY;
            }
            return dD;
            return mM;

        }

        dateSeporator(inputDate);


        function dateExtender(dd, mm, yy) {
            switch (mm) {
                case "01":
                    alert("January " + dd + yy);
                    break;
                case "02":
                    alert("February " + dd + yy);
                    break;
                case "03":
                    alert("March " + dd + yy);
                    break;
                case "04":
                    alert("April " + dd + yy);
                    break;
                case "05":
                    alert("May " + dd + yy);
                    break;
                case "06":
                    alert("June " + dd + yy);
                    break;
                case "07":
                    alert("July " + dd + yy);
                    break;
                case "08":
                    alert("August " + dd + yy);
                    break;
                case "09":
                    alert("September " + dd + yy);
                    break;
                case "10":
                    alert("October " + dd + yy);
                    break;
                case "11":
                    alert("November " + dd + yy);
                    break;
                case "12":
                    alert("December " + dd + yy);
                    break;

            }
        }

        dateExtender(dD, mM, yY);
    }

    dateMachine();

})();
