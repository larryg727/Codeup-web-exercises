/**
 * Created by larryg on 4/17/17.
 */
"use strict";
(function () {

    var startbtn = document.getElementById("start");
    var stopbtn = document.getElementById("stop");
    var resetbtn = document.getElementById("reset");
    var time = document.getElementById("timer");

    var runningTime = 0;

    var interval;
    function intervalSetter () {
        interval = setInterval(function () {
            time.innerText = runningTime.toFixed(2);
            runningTime += .01;
        }, 10);
    }
    function stop(){
        clearInterval(interval);
    }

    function reset(){
        time.innerText = "0.00";
        runningTime = 0;
    }

    startbtn.addEventListener("click", intervalSetter);
    stopbtn.addEventListener("click", stop);
    resetbtn.addEventListener("click", reset);




})();