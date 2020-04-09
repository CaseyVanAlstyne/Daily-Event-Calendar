$(document).ready(function () {

    var currentDay = $("#currentDay");
    var userInput = $("#user-input");
    var time = moment().format('H');
    var allTimeSlots = $(".content");
    console.log(allTimeSlots);

    // display the current date and time in the currentDay Id on the HTML document------------------------------------------------------------------
    function updateTime() {
        currentDay.text(moment().format('dddd, MMMM Do YYYY, H'))
        console.log(time);
    }
    setInterval(updateTime, 1000);

    // use for loop to compare time (H) to currentDay-----------------------------------------------------------------------------------------------

    // for (let i = 0; i < allTimeSlots.length; i++) {
    //     // console.log(allTimeSlots[i])
    //     // console.log(time);
    //     // console.log(currentDay);

    //     // add class to each of the textarea elements for allTimeSlots------------------------------------------------------------------------------
    //     if (time >= 8 && time < 9) {
    //         $(allTimeSlots[i]).addClass("present");
    //     }

    //     if (time !== 8) {
    //         $(allTimeSlots[i]).addClass("past");
    //     } else if (time === currentDay) {
    //         $(allTimeSlots[i]).addClass("present");
    //     } else {
    //         $(allTimeSlots[i]).addClass("future");
    //     }
    // do I need to use less than and / or greater than for the past / future ?
    // }

    allTimeSlots.each(function () {
        console.log($(this).attr("id"));
        var loopId = $(this).attr("id")
        var parsedLoop = parseInt(loopID);
        console.log(typeof parsedLoop);
        console.log(typeof loopId);
        console.log(typeof time);
        if (time < loopId) {
            $(this).addClass("past");
        } else if (time > loopId) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });



    // start localstorage here---Need a setItem---------------------------------------------------------------------------------------------------------

    // function updateContent() {
    //     "8".innerHTML = localStorage.getItem("eight");
    //     "9".innerHTML = localStorage.getItem("nine");
    //     "10".innerHTML = localStorage.getItem("ten");
    //     "11".innerHTML = localStorage.getItem("eleven");
    //     "12".innerHTML = localStorage.getItem("twelve");
    //     "13".innerHTML = localStorage.getItem("thirteen");
    //     "14".innerHTML = localStorage.getItem("fourteen");
    //     "15".innerHTML = localStorage.getItem("fifteen");
    //     "16".innerHTML = localStorage.getItem("sixteen");
    //     "17".innerHTML = localStorage.getItem("seventeen");
    //     }

    // Need a save button------------------------------------------------------------------------------------------------------------------------------------------------------------

});