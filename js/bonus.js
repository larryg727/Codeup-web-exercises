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

    function wordCount(string) {
        var holder = string.split(" ");

        // holder.forEach(function (word) {
        //     var wordCountObject = {
        //         word: 1
        //     };
        //     return wordCountObject;
        // });
    }

    console.log(wordCount("I am testing"));

})();