/**
 * Created by larryg on 4/14/17.
 */
"use strict";

(function () {

    var easy = [1, 2, 3, 4, 5];

    function first() {
        return easy[0];
    }

    console.log(first());

    function last() {
        return easy[(easy.length - 1)];
    }

    console.log(last());

    function rest() {
        var removed = easy.shift();
        return easy;
    }

    console.log(easy);
    console.log(rest());

    //---------medium-------
//     var count = 0
//     function wordCount(string) {
//         var holder = string.split(" ");
//         holder.sort();
//
//         holder.forEach(function (word) {
//             for(var i = 0; i > holder.length; i++){
//                 if (holder.indexOf(word) >= 0){
//                     holder.splice(this.indexOf(word), 1);
//                     count++
//                 }else {
//                     return word + count;
//                 }
//             }
//
//
//         });
//     }
//
//         console.log(count);
//     console.log(wordCount("I am testing"));
// console.log(count);

    function range(min, max, step){
        var returnArray = [];
        var span = max - min + 1;
        for(var i = 0; i < span; i += step){
            returnArray.push(min + i);
        }
        return returnArray;
    }
console.log(range(10, 20, 2));


    var numbers = [1, 2, 3, 4, 5, 6];
    function chunk(array, span){
        var piece = array[i]
        for(var i = 0; i < array.length; i++)
            var temp = array[i] + array[i+1];
    }

    chunk(numbers, 2);


})();