//ADD current day at the top
var today = dayjs();
$('#currentDay').text(today.format('dddd,MMM D, YYYY'));
//google current time, for that is not the same as the current day in terms of values

// var time = dayjs().format('hh:mm:ss');
// $('#currentTime').text(time);
//current time displayed, but it stays still and doesnt move...

setInterval(function() {
  var time = dayjs().format('hh:mm:ss');
$('#currentTime').text(time);

} ,1000);
//create function that connects save button to local storage
function taskSave() {
  console.log($(this).parent().attr("id"))
var text= $(this).siblings("textarea").val()
var time= $(this).parent().attr("id")
localStorage.setItem(time, text)
}
//save button is clicked at end of the rows, data goes to LS
$(".saveBtn").click(taskSave)
$("#hour-9 textarea").val(localStorage.getItem("hour-9"));
$("#hour-10 textarea").val(localStorage.getItem("hour-10"));
$("#hour-11 textarea").val(localStorage.getItem("hour-11"));
$("#hour-12 textarea").val(localStorage.getItem("hour-12"));
$("#hour-13 textarea").val(localStorage.getItem("hour-13"));
$("#hour-14 textarea").val(localStorage.getItem("hour-14"));
$("#hour-15 textarea").val(localStorage.getItem("hour-15"));
$("#hour-16 textarea").val(localStorage.getItem("hour-16"));
$("#hour-17 textarea").val(localStorage.getItem("hour-17"));
//end of rows

//Past Present Future fucntionality &logic
$(".time-block").each(function(){ 
  console.log(dayjs().hour())
  var timeNow = dayjs().hour()
  var rowHour = $(this).attr("id").split("-")[1]
  console.log(rowHour)
  if(timeNow>rowHour){
    $(this).addClass("past")
    
  }
  else if(timeNow<rowHour){
    $(this).addClass("future")
  }
  else{
    $(this).addClass("present")
  }
})


















  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

