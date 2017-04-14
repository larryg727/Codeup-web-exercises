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
        holder.sort();
        holder.forEach(function (word) {
            var count = 0
            for(var i = 0; i > holder.length; i++){
                if (this.indexOf(word)){
                    this.splice(this.indexOf(word), 1);
                    count++
                }
                    return word + count;
            }


        });
    }

    console.log(wordCount("I am testing"));

})();