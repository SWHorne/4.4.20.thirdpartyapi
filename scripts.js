var currentMomentDate = moment().format("MMM Do YY");

function displayDate() {
$("#currentDay").text(currentMomentDate);
};
displayDate();

calendar();
function calendar(){
    var tableCalendar = $('<table>');
    var tableday = $('tr');
}

var currentMomentDate = moment().format("MMM Do YY");