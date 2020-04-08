$(document).ready(function () {

    var currentDay = $("#currentDay");
    var userInput = $("#user-input");
    var time = moment().format('h');
    // var m = moment().format('MMMM Do YYYY');
    var allTimeSlots = $(".content");
    console.log(allTimeSlots);

    // display the current date and time in the currentDay Id on the HTML document
    function updateTime() {
        currentDay.text(moment().format('h'))
        console.log(time);
    }
    setInterval(updateTime, 60000);

    // use for loop to compare time (ha) to the id for the time, which is foun on the HTML document. 
    for (let i = 0; i < allTimeSlots.length; i++) {
        console.log(allTimeSlots[i])
        // compare time with Ids
        console.log(time);
        console.log(currentDay);
        if (time !== currentDay) {
            $(allTimeSlots[i]).addClass("past");
        } else if (time === currentDay) {
            $(allTimeSlots[i]).addClass("present");
        } else {
            $(allTimeSlots[i]).addClass("future");
        }
    }

    // function updateContent() {
    //     "9".innerHTML = localStorage.getItem("nine");
    //     "10".innerHTML = localStorage.getItem("ten");
    //     "11".innerHTML = localStorage.getItem("eleven");
    //     "12".innerHTML = localStorage.getItem("twelve");
    //     "1".innerHTML = localStorage.getItem("one");
    //     "2".innerHTML = localStorage.getItem("two");
    //     "3".innerHTML = localStorage.getItem("three");
    //     "4".innerHTML = localStorage.getItem("four");
    //     "5".innerHTML = localStorage.getItem("five");
    //     }

});