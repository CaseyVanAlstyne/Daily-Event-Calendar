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

    allTimeSlots.each(function () {
        console.log($(this).attr("id"));
        var loopId = $(this).attr("id")
        var parsedTime = parseInt(time);
        var parsedLoop = parseInt(loopId);
        console.log({ time, loopId, parsedLoop });
        if (parsedTime < parsedLoop) {
            $(this).addClass("future");
        } else if (parsedTime > parsedLoop) {
            $(this).addClass("past");
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