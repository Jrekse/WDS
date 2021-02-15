 //sets date and time for jumbotron
 var d = new Date();
 document.getElementById("currentDay").innerHTML = d;

 //calls stored events
 midnightFunction();
 oneAmFunction();
 twoAmFunction();
 threeAmFunction();
 fourAmFunction();
 fiveAmFunction();
 sixFunction();
 sevenFunction();
 eightFunction();
 nineFunction();
 tenFunction();
 elevenFunction();
 twelveFunction();
 oneFunction();
 twoFunction();
 threeFunction();
 fourFunction();
 fiveFunction();
 sixPmFunction();
 sevenPmFunction();
 eightPmFunction();
 ninePmFunction();
 tenPmFunction();
 elevenPmFunction();

 //assigns hour variables and grabs the current hour from dayjs
 var currentHour = dayjs().hour();
 var midnight = 0
 var oneAm = 1;
 var twoAm = 2;
 var threeAm = 3
 var fourAm = 6;
 var fiveAm = 5;
 var sixAm = 6;
 var sevenAm = 7;
 var eightAm = 8
 var nineAm = 9;
 var tenAm = 10;
 var elevenAm = 11;
 var twelvePm = 12;
 var onePm = 13;
 var twoPm = 14;
 var threePm = 15;
 var fourPm = 16;
 var fivePm = 17;
 var sixPm = 18;
 var sevenPm = 19;
 var eightPm = 20;
 var ninePm = 21;
 var tenPm = 22;
 var elevenPm = 23;
 //puts hours into an array to be looped through
 var hourOfDay = [nineAm,tenAm,elevenAm,twelvePm,onePm,twoPm,threePm,fourPm,fivePm];
 
 var i;
 //loops through all hours in array
 for (i = 0; i < hourOfDay.length; i++){
   //checks for the current hour and matches it to an array item
   if (hourOfDay[i] === currentHour){
     //asks which hour it is specifically, then sorts hour to be color coded on the UI (lines 122 - 207)
     if (hourOfDay[i] === nineAm){
       document.getElementById("9").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === tenAm){
       document.getElementById("10").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === elevenAm){
       document.getElementById("11").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === twelvePm){
       document.getElementById("12").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === onePm){
       document.getElementById("13").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === twoPm){
       document.getElementById("14").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === threePm){
       document.getElementById("15").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === fourPm){
       document.getElementById("16").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === fivePm){
       document.getElementById("17").setAttribute("class", "col-1 present")
     }
   } else if (hourOfDay[i] < currentHour){
     if (hourOfDay[i] === nineAm){
       document.getElementById("9").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === tenAm){
       document.getElementById("10").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === elevenAm){
       document.getElementById("11").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === twelvePm){
       document.getElementById("12").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === onePm){
       document.getElementById("13").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === twoPm){
       document.getElementById("14").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === threePm){
       document.getElementById("15").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === fourPm){
       document.getElementById("16").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === fivePm){
       document.getElementById("17").setAttribute("class", "col-1 past")
     }
   } else {
     if (hourOfDay[i] === nineAm){
       document.getElementById("9").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === tenAm){
       document.getElementById("10").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === elevenAm){
       document.getElementById("11").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === twelvePm){
       document.getElementById("12").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === onePm){
       document.getElementById("13").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === twoPm){
       document.getElementById("14").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === threePm){
       document.getElementById("15").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === fourPm){
       document.getElementById("16").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === fivePm){
       document.getElementById("17").setAttribute("class", "col-1 future")
     }
   }
 }

 //Local Storage
 
   

   document.getElementById("9-save").addEventListener("click",function(){
     var nineText = document.getElementById("9-text").value;
     localStorage.setItem("nVal", nineText);
     nineFunction();
   });
   document.getElementById("10-save").addEventListener("click",function(){
     var tenText = document.getElementById("10-text").value;
     localStorage.setItem("tenVal", tenText);
     tenFunction();
   })
   document.getElementById("11-save").addEventListener("click",function(){
     var elevenText = document.getElementById("11-text").value;
     localStorage.setItem("elevenVal", elevenText);
     elevenFunction();
   })
   document.getElementById("12-save").addEventListener("click",function(){
     var twelveText = document.getElementById("12-text").value;
     localStorage.setItem("twelveVal", twelveText);
     twelveFunction();
   })
   document.getElementById("1-save").addEventListener("click",function(){
     var oneText = document.getElementById("1-text").value;
     localStorage.setItem("oneVal", oneText);
     oneFunction();
   })
   document.getElementById("2-save").addEventListener("click",function(){
     var twoText = document.getElementById("2-text").value;
     localStorage.setItem("twoVal", twoText);
     twoFunction();
   })
   document.getElementById("3-save").addEventListener("click",function(){
     var threeText = document.getElementById("3-text").value;
     localStorage.setItem("threeVal", threeText);
     threeFunction();
   })
   document.getElementById("4-save").addEventListener("click",function(){
     var fourText = document.getElementById("4-text").value;
     localStorage.setItem("fourVal", fourText);
     fourFunction();
   })
   document.getElementById("5-save").addEventListener("click",function(){
     var fiveText = document.getElementById("5-text").value;
     localStorage.setItem("fiveVal", fiveText);
     fiveFunction();
   })

   //display stored event
   function nineFunction(){
     var nineStored = localStorage.getItem("nVal");
     document.getElementById("9-text").innerHTML = nineStored;
   }
   function tenFunction(){
     var tenStored = localStorage.getItem("tenVal");
     document.getElementById("10-text").innerHTML = tenStored;
   }
   function elevenFunction(){
     var elevenStored = localStorage.getItem("elevenVal");
     document.getElementById("11-text").innerHTML = elevenStored;
   }
   function twelveFunction(){
     var twelveStored = localStorage.getItem("twelveVal");
     document.getElementById("12-text").innerHTML = twelveStored;
   }
   function oneFunction(){
     var oneStored = localStorage.getItem("oneVal");
     document.getElementById("1-text").innerHTML = oneStored;
   }
   function twoFunction(){
     var twoStored = localStorage.getItem("twoVal");
     document.getElementById("2-text").innerHTML = twoStored;
   }
   function threeFunction(){
     var threeStored = localStorage.getItem("threeVal");
     document.getElementById("3-text").innerHTML = threeStored;
   }
   function fourFunction(){
     var fourStored = localStorage.getItem("fourVal");
     document.getElementById("4-text").innerHTML = fourStored;
   }
   function fiveFunction(){
     var fiveStored = localStorage.getItem("fiveVal");
     document.getElementById("5-text").innerHTML = fiveStored;
   }

   //clears localstorage and refreshes page
   document.getElementById("clear-btn").addEventListener("click", function(){
     localStorage.clear();
     location.reload();
   })