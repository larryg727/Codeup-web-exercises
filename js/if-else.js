/**
 * Created by larryg on 4/10/17.
 */
"use strict";

var studentGrade1 = 70;
var studentGrade2 = 80;
var studentGrade3 = 95;

if ((studentGrade1 + studentGrade2 + studentGrade3) / 3 > 80) {
    console.log("Your Awesome!");
} else  {
    console.log("You need to practice more")
}


var camron = 180;
var ryan = 250;
var george = 320;

if (camron > 200){
    var camronDisc = (camron - 200) * .35;
    var camronPaid = camron - camronDisc;
} else {
    var camronPaid = camron;
}
console.log("Camron bought $" + camron.toFixed(2) + " worth of products. Final payment: $" + camronPaid.toFixed(2));

if (ryan > 200) {
    var ryanDisc = (ryan - 200) * .35;
    var ryanPaid = ryan - ryanDisc;
}else {
    ryanPaid = ryan;
}

console.log("Ryan bought $" + ryan.toFixed(2) + " worth of products. Final payment: $" + ryanPaid.toFixed(2));

if (george > 200){
    var georgeDisc = (george - 200) * .35;
    var georgePaid = george - georgeDisc;
}else {
    georgePaid = george
}
console.log("George bought $" + george.toFixed(2) + " worth of products. Final payment: $" + georgePaid.toFixed(2));



var flipACoin = Math.floor(Math.random()* 2);

var whatBuy = (flipACoin === 0) ? "Buy a car" : "Buy a house";
console.log(whatBuy);