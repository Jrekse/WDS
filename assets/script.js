$(document).ready(function() {

  //show date in header using Momentjs
  function getDate() {
      var currentDate = dayjs().format('dddd MMM DD[,] YYYY');
      $('#currentDay').text(currentDate);
  }
  getDate();

  //will be used to check if hour is in past or future
  var currentTime = dayjs().format("L LT");

  //get previously stored events to display in corresponding row
  $(".row").each(function() {
      var time = $(this).attr("id");
      var textArea = localStorage.getItem(time);
      $(this).find("textarea").val(textArea);
  })

  //assign classes to past, present, future using the main div's ID attribute
  $(".row").each(function() {
      var value = parseInt($(this).attr("id"));

      if (value < currentTime) {
          $(this).find("textarea").addClass("past");
      }
      else if (value == currentTime) {
          $(this).find("textarea").addClass("present");
      }
      else {
          $(this).find("textarea").addClass("future");
      }
  });

  //set user's input to storage onclick
  $(".saveBtn").on("click", function() {
      var time = $(this).parent().attr("id");
      var textArea = $(this).siblings(".description").val();
      localStorage.setItem(time, textArea);
  })
})

document.getElementById("clear-btn").addEventListener("click", function(){
    localStorage.clear();
    location.reload();
  }) 