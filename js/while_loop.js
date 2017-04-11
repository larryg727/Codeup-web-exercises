/**
 * Created by larryg on 4/10/17.
 */
"use strict";

var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;
console.log(allCones);
var conesLeft = allCones;

do {
    console.log(cones + " cones sold...");
    conesLeft -= cones;
    console.log(conesLeft);
} while (conesLeft >= cones);

if (conesLeft === 0) {
    console.log("Yay! I sold them all!");
}else if (conesLeft < cones) {
    console.log("Sorry I can not sell you " + cones + " I only have " + conesLeft);
}



var x = 2;
while (x <= 65536) {
    console.log(x);
    x *= 2;
}