(function(){
    "use strict";
    var names = ["Larry", "Angel", "Tina", "Andy"];

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    console.log(names.length);
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    // TODO: Create log statements that will print each of the names array elements individually.


for (var i=0; i < names.length; i++){
    console.log("The name at spot " + (i+1) + " is " + names[i]);
}

names.forEach(function (element, index, array) {
    console.log("The name at spot " + index + " is " + element + " on the foreach loop");
    })

//    -------meal planner---------
    console.log("**Bonus exercise**");
    var removed = []
    var meals = ["Pizza", "Hamburgers n Fries", "Chicken Salad", "Baked Salmon", "Fried Chicken", "Lasagna", "Sub-sandwich", "Spaghetti", "Fish sticks", "Grilled chicken", "BBQ", "Cereal"];
    var daysWeek = ["Monday", "Tuesday", "Wednesday", "Thurseday", "Friday", "Saturday"];
    function mealPlan(){
        for(var i = 0; i < daysWeek.length; i++) {
            var randomMeal = Math.floor(Math.random() * meals.length);
            console.log(daysWeek[i] + "- " + meals[randomMeal]);
             removed.push(meals[randomMeal]);
            meals.splice(randomMeal, 1);
        }
        console.log(removed);
        do {
            var temp = removed.pop();
            meals.push(temp);
        }while (removed.length > 0);
    }
    mealPlan();
    console.log(meals);

//-----------game------------

function game(){


    var count = [];
    for (var i = 0; i < 3; i++) {
        var coinToss = Math.floor(Math.random() * 2);
        if (coinToss) {
            count.push(1);
            console.log("Strike");
        } else {
            count.push(0);
            console.log("Score");
        }
    }

        if ((count[0] === count[2]) && (count[1] === count[2]) && count[0] && count[1] && count[2]){
            console.log("You lose.");
        }else if((count[0] === count[2]) && (count[1] === count[2]) && !count[0] && !count[1] && !count[2]) {
            console.log ("You Win!");
        }else{
            console.log("Please try again");
        }
}
game();
game();
game();
game();
})();