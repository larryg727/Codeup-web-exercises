/**
 * Created by larryg on 4/10/17.
 */
"use strict";

var luckyNumber = Math.floor(Math.random() * 6);
var receiptAmount = 60;
var promotion1 = "10%";
var promotion2 = "25%";
var promotion4 = "50%";
var promotion5 = "100%";
var discount1 = receiptAmount - (receiptAmount * .10);
var discount2 = receiptAmount - (receiptAmount * .25);
var discount4 = receiptAmount - (receiptAmount * .50);
var discount5 = receiptAmount - (receiptAmount * 1.00);

console.log(luckyNumber);

switch (luckyNumber) {
    case 1 :
        console.log("Congrats! you get " + promotion1 + " off. You're new total is $" + parseFloat(Math.round(discount1 * 100) / 100).toFixed(2));
        break;
    case 2 :
        console.log("Congrats! you get " + promotion2 + " off. You're new total is $" + parseFloat(Math.round(discount2 * 100) / 100).toFixed(2));
        break;
    case 4 :
        console.log("Congrats! you get " + promotion4 + " off. You're new total is $" + parseFloat(Math.round(discount4 * 100) / 100).toFixed(2));
        break;
    case 5 :
        console.log("Congrats! you get " + promotion5 + " off. You're new total is $" + parseFloat(Math.round(discount5 * 100) / 100).toFixed(2));
        break;
    default:
        console.log("Sorry you did not win a discount today. Better luck next time. You owe $" + parseFloat(Math.round(receiptAmount * 100) / 100).toFixed(2));
}

var month = Math.floor(Math.random() * 12);
console.log(month)
switch (month) {
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("Feburaury");
        break;
    case 3 :
        console.log("March");
        break;
    case 4 :
        console.log("April");
        break;
    case 5 :
        console.log("May");
        break;
    case 6 :
        console.log("June");
        break;
    case 7 :
        console.log("July");
        break;
    case 8 :
        console.log("August");
        break;
    case 9 :
        console.log("September");
        break;
    case 10 :
        console.log("October");
        break;
    case 11 :
        console.log("November");
        break;
    case 12 :
        console.log("December");
        break;

}