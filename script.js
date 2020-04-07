$(document).ready(function () {

    var currentDay = $("#currentDay");
    var userInput = $("#user-input");
    var time = moment().format('ha');
    // var m = moment().format('MMMM Do YYYY');
    var allTimeSlots = $(".content");
    console.log(allTimeSlots);

    // display the current date and time in the currentDay Id on the HTML document
    function updateTime() {
        currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'))
        console.log(time);
    }
    setInterval(updateTime, 0);

    // use for loop to compare time (ha) to the id for the time, which is foun on the HTML document. 
    for (let i = 0; i < allTimeSlots.length; i++) {
        console.log(allTimeSlots[i])
        // compare time with Ids
        // if (time !== currentDay) {
        //     allTimeSlots.style.color = "#99badd";
    }

    //     function checkTimes() {
    //         let currentTime = moment().hour();
    //         if (currentTime >= 9 && currentTime < 10) {
    //             (NEED SOMETHING HERE WITHOUT PARENTHESIS).style.background = ".present";
    //       }
    // }

    // function updateContent() {
    //     "9am".innerHTML = localStorage.getItem("nine");
    //     "10am".innerHTML = localStorage.getItem("ten");
    //     "11am".innerHTML = localStorage.getItem("eleven");
    //     "12pm".innerHTML = localStorage.getItem("twelve");
    //     "1pm".innerHTML = localStorage.getItem("one");
    //     "2pm".innerHTML = localStorage.getItem("two");
    //     "3pm".innerHTML = localStorage.getItem("three");
    //     "4pm".innerHTML = localStorage.getItem("four");
    //     "5pm".innerHTML = localStorage.getItem("five");
    //     }

});