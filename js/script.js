/*Nina Kong*/

var countdownSeconds;
var intervalHandle;

function showInput() {
    $('#countdownButton').show();
}

function countdownResult() {

    var minute = Math.floor(countdownSeconds / 60);
    var second = countdownSeconds - (minute * 60);
    
    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    var result = minute + ":" + second;

    $("div#countdownMessage").html(result);

    if (countdownSeconds === 0) {
        clearInterval(intervalHandle);
        showInput();
    }

    countdownSeconds--;
}
function Countdown() {

    var countdownMinute = $('#countdownInput').val();

    if (isNaN(countdownMinute)) {
        alert("Please enter a number!");
        return;
    }

    countdownSeconds =  countdownMinute * 60;

    intervalHandle = setInterval(countdownResult, 1000);

    $('#countdownButton').hide();
    $('#countdownInput').hide();
}

$(document).ready(function () {
	"use strict";
    $('#countdownButton').click(function () {
        Countdown();
    });
});