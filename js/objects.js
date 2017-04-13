(function () {
    "use strict";
    var person = {};
    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    person.firstName = "Larry";
    person.lastName = "Gonzales";
    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    person.sayHello = function () {
        var message = "Hello from " + this.firstName + " " + this.lastName + "!";
        console.log(message);
    }
    person.sayHello();
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shoppers) {
        if (shoppers.amount > 200) {
            console.log("Name: " + shoppers.name);
            console.log("Amount before discount: $" + (shoppers.amount).toFixed(2));
            var discount = shoppers.amount * .35;
            console.log("Discount: $" + discount.toFixed(2));
            console.log("Amount after discount: $" + (shoppers.amount - discount).toFixed(2));
            console.log("--------------------------------------------------")
        } else {
            console.log("Name: " + shoppers.name);
            console.log("Amount before discount: $" + (shoppers.amount).toFixed(2));
            console.log("Discount: Sorry no discount.");
            console.log("Amount after discount: $" + (shoppers.amount).toFixed(2));
            console.log("--------------------------------------------------")
        }
    });


    var books = [
        {
            title: "Cat in the Hat",
            author: {
                firstName: "Dr",
                lastName: "Suess"
            }
        }, {
            title: "Adventures of Huckleberry Finn",
            author: {
                firstName: "Mark",
                lastName: "Twain"
            }
        }, {
            title: "Moby-Dick",
            author: {
                firstName: "Herman",
                lastName: "Mellville"
            }
        }, {
            title: "The Great Gatsby",
            author: {
                firstName: "F.Scott",
                lastName: "Fitzgerald"
            }
        }, {
            title: "Great Expectations",
            author: {
                firstName: "Charles",
                lastName: "Dickens"
            }
        }, {
            title: "Harry Potter and the Sorcerer's Stone",
            author: {
                firstName: "J.K.",
                lastName: "Rowling"
            }

        }
    ];
// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array


// log out the books array
    console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
    books.forEach(function(books, index){
            console.log("Book #" + (index + 1));
            console.log("Title: " + books.title);
            console.log("Author: " + books.author.firstName + " " + books.author.lastName);
            console.log("---------------------------------------------------");
// end loop here

        });

})();