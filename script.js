$(document).ready(function () {
    var currentDay = $("#currentDay");
    var time = moment().format("H");
    var allTimeSlots = $(".content");
    var saveBtn = $("#saveBtn");
    var clearBtn = $("#clearBtn");
    // console.log(allTimeSlots);

    // display the current date and time in the currentDay Id on the HTML document------------------------------------------------------------------
    function updateTime() {
        currentDay.text(moment().format('dddd, MMMM Do YYYY, H'))
        console.log(time);
    } setInterval(updateTime, 1000);

    // use function to compare parsedTime to parsedLoop-----------------------------------------------------------------------------------------------
    allTimeSlots.each(function () {
        // console.log($(this).attr("id"));
        var loopId = $(this).attr("id")
        var parsedTime = parseInt(time);
        var parsedLoop = parseInt(loopId);
        // console.log({ time, loopId, parsedLoop });
        if (parsedTime < parsedLoop) {
            $(this).addClass("future");
        } else if (parsedTime > parsedLoop) {
            $(this).addClass("past");
        } else {
            $(this).addClass("present");
        }
    });

    // localstorage-- setItem ---------------------------------------------------------------------------------------------------------
    saveBtn.on('click', writeLocalStorage);
    function writeLocalStorage() {
        allTimeSlots.each(function () {
            // console.log(this);
            console.log($(this).val(), $(this).attr("id"));
            // $(this).val();
            localStorage.setItem($(this).attr("id"), $(this).val());
            // console.log("here here");
        });
    }
    // localStorage getItem ---------------------------------------------------------------------------------------------------------
    function updateContent() {
        $("#8").val(localStorage.getItem("8"));
        console.log(localStorage.getItem("8"))
        $("#9").val(localStorage.getItem("9"));
        $("#10").val(localStorage.getItem("10"));
        $("#11").val(localStorage.getItem("11"));
        $("#12").val(localStorage.getItem("12"));
        $("#13").val(localStorage.getItem("13"));
        $("#14").val(localStorage.getItem("14"));
        $("#15").val(localStorage.getItem("15"));
        $("#16").val(localStorage.getItem("16"));
        $("#17").val(localStorage.getItem("17"));
    }
    // clear localStorage---------------------------------------------------------------------------------------------------------
    clearBtn.on('click', function () {
        localStorage.clear();
        updateContent()
    });

    updateContent();
});