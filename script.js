var currentDay = document.getElementsById("currentDay");
var userInput = document.getElementById("user-input");

$(window).load(function(currentDay){
    moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
});