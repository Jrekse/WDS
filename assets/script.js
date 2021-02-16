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
 sixAmFunction();
 sevenAmFunction();
 eightAmFunction();
 nineAmFunction();
 tenAmFunction();
 elevenAmFunction();
 twelvePmFunction();
 onePmFunction();
 twoPmFunction();
 threePmFunction();
 fourPmFunction();
 fivePmFunction();
 sixPmFunction();
 sevenPmFunction();
 eightPmFunction();
 ninePmFunction();
 tenPmFunction();
 elevenPmFunction();

 //assigns hour variables and grabs the current hour from dayjs
 var currentHour = dayjs().hour();
 var midnight = 24;
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
 var hourOfDay = [midnight,oneAm,twoAm,threeAm,fourAm,fiveAm,sixAm,sevenAm,eightAm,nineAm,tenAm,elevenAm,twelvePm,onePm,twoPm,threePm,fourPm,fivePm,sixPm,sevenPm,eightPm,ninePm,tenPm,elevenPm];
 
 var i;
 //loops through all hours in array
 for (i = 0; i < hourOfDay.length; i++){
   //checks for the current hour and matches it to an array item
   if (hourOfDay[i] === currentHour){
     //asks which hour it is specifically, then sorts hour to be color coded on the UI (lines 122 - 207)
     if (hourOfDay[i] === midnight){
      document.getElementById("24").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === oneAm){
      document.getElementById("1").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === twoAm){
      document.getElementById("2").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === threeAm){
      document.getElementById("3").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === fourAm){
      document.getElementById("4").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === fiveAm){
      document.getElementById("5").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === sixAm){
      document.getElementById("6").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === sevenAm){
      document.getElementById("7").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === eightAm){
      document.getElementById("8").setAttribute("class", "col-1 present")
     }
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
     if (hourOfDay[i] === sixPm){
      document.getElementById("18").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === sevenPm){
      document.getElementById("19").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === eightPm){
      document.getElementById("20").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === ninePm){
      document.getElementById("21").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === tenPm){
      document.getElementById("22").setAttribute("class", "col-1 present")
     }
     if (hourOfDay[i] === elevenPm){
      document.getElementById("23").setAttribute("class", "col-1 present")
     }
     //if the hour already happened
   } else if (hourOfDay[i] < currentHour){
    if (hourOfDay[i] === midnight){
      document.getElementById("24").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === oneAm){
      document.getElementById("1").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === twoAm){
      document.getElementById("2").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === threeAm){
      document.getElementById("3").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === fourAm){
      document.getElementById("4").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === fiveAm){
      document.getElementById("5").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === sixAm){
      document.getElementById("6").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === sevenAm){
      document.getElementById("7").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === eightAm){
      document.getElementById("8").setAttribute("class", "col-1 past")
     }
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
     if (hourOfDay[i] === sixPm){
      document.getElementById("18").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === sevenPm){
      document.getElementById("19").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === eightPm){
      document.getElementById("20").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === ninePm){
      document.getElementById("21").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === tenPm){
      document.getElementById("22").setAttribute("class", "col-1 past")
     }
     if (hourOfDay[i] === elevenPm){
      document.getElementById("23").setAttribute("class", "col-1 past")
     }
     //hours that havent happened yet
   } else {
    if (hourOfDay[i] === midnight){
      document.getElementById("24").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === oneAm){
      document.getElementById("1").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === twoAm){
      document.getElementById("2").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === threeAm){
      document.getElementById("3").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === fourAm){
      document.getElementById("4").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === fiveAm){
      document.getElementById("5").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === sixAm){
      document.getElementById("6").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === sevenAm){
      document.getElementById("7").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === eightAm){
      document.getElementById("8").setAttribute("class", "col-1 future")
     }
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
     if (hourOfDay[i] === sixPm){
      document.getElementById("18").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === sevenPm){
      document.getElementById("19").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === eightPm){
      document.getElementById("20").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === ninePm){
      document.getElementById("21").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === tenPm){
      document.getElementById("22").setAttribute("class", "col-1 future")
     }
     if (hourOfDay[i] === elevenPm){
      document.getElementById("23").setAttribute("class", "col-1 future")
     }
   }
 }

 //Local Storage
   document.getElementById("1-save").addEventListener("click",function(){
     var oneText = document.getElementById("1-text").value;
     localStorage.setItem("oneVal", oneText);
     oneAmFunction();
   });
   document.getElementById("2-save").addEventListener("click",function(){
     var twoText = document.getElementById("2-text").value;
     localStorage.setItem("twoVal", twoText);
     twoAmFunction();
   });
   document.getElementById("3-save").addEventListener("click",function(){
     var threeText = document.getElementById("3-text").value;
     localStorage.setItem("threeVal", threeText);
     threeAmFunction();
   });
   document.getElementById("4-save").addEventListener("click",function(){
     var fourText = document.getElementById("4-text").value;
     localStorage.setItem("fourVal", fourText);
     fourAmFunction();
   });
   document.getElementById("5-save").addEventListener("click",function(){
     var fiveText = document.getElementById("5-text").value;
     localStorage.setItem("fiveVal", fiveText);
     fiveAmFunction();
   });
   document.getElementById("6-save").addEventListener("click",function(){
     var sixText = document.getElementById("6-text").value;
     localStorage.setItem("sixVal", sixText);
     sixAmFunction();
   });  
   document.getElementById("7-save").addEventListener("click",function(){
     var sevenText = document.getElementById("7-text").value;
     localStorage.setItem("sevenVal", sevenText);
     sevenAmFunction();
   });
   document.getElementById("8-save").addEventListener("click",function(){
     var eightText = document.getElementById("8-text").value;
     localStorage.setItem("eightVal", eightText);
     eightAmFunction();
   });
   document.getElementById("9-save").addEventListener("click",function(){
     var nineText = document.getElementById("9-text").value;
     localStorage.setItem("nVal", nineText);
     nineAmFunction();
   });
   document.getElementById("10-save").addEventListener("click",function(){
     var tenText = document.getElementById("10-text").value;
     localStorage.setItem("tenVal", tenText);
     tenAmFunction();
   })
   document.getElementById("11-save").addEventListener("click",function(){
     var elevenText = document.getElementById("11-text").value;
     localStorage.setItem("elevenVal", elevenText);
     elevenAmFunction();
   })
   document.getElementById("12-save").addEventListener("click",function(){
     var twelveText = document.getElementById("12-text").value;
     localStorage.setItem("twelveVal", twelveText);
     twelvePmFunction();
   })
   document.getElementById("13-save").addEventListener("click",function(){
     var onePmText = document.getElementById("13-text").value;
     localStorage.setItem("onePmVal", onePmText);
     onePmFunction();
   })
   document.getElementById("14-save").addEventListener("click",function(){
     var twoPmText = document.getElementById("14-text").value;
     localStorage.setItem("twoPmVal", twoPmText);
     twoPmFunction();
   })
   document.getElementById("15-save").addEventListener("click",function(){
     var threePmText = document.getElementById("15-text").value;
     localStorage.setItem("threePmVal", threePmText);
     threePmFunction();
   })
   document.getElementById("16-save").addEventListener("click",function(){
     var fourPmText = document.getElementById("16-text").value;
     localStorage.setItem("fourPmVal", fourPmText);
     fourPmFunction();
   })
   document.getElementById("17-save").addEventListener("click",function(){
     var fivePmText = document.getElementById("17-text").value;
     localStorage.setItem("fivePmVal", fivePmText);
     fivePmFunction();
   })
   document.getElementById("18-save").addEventListener("click",function(){
    var sixPmText = document.getElementById("18-text").value;
    localStorage.setItem("sixPmVal", sixPmText);
    sixPmFunction();
   });
   document.getElementById("19-save").addEventListener("click",function(){
    var sevenPmText = document.getElementById("19-text").value;
    localStorage.setItem("sevenPmVal", sevenPmText);
    sevenPmFunction();
   });
   document.getElementById("20-save").addEventListener("click",function(){
    var eightPmText = document.getElementById("20-text").value;
    localStorage.setItem("eightPmVal", eightPmText);
    eightPmFunction();
   });
   document.getElementById("21-save").addEventListener("click",function(){
    var ninePmText = document.getElementById("21-text").value;
    localStorage.setItem("ninePmVal", ninePmText);
    ninePmFunction();
   });
   document.getElementById("22-save").addEventListener("click",function(){
    var tenPmText = document.getElementById("22-text").value;
    localStorage.setItem("tenPmVal", tenPmText);
    tenPmFunction();
   });
   document.getElementById("23-save").addEventListener("click",function(){
    var elevenPmText = document.getElementById("23-text").value;
    localStorage.setItem("elevenPmVal", elevenPmText);
    elevenPmFunction();
   });
   document.getElementById("24-save").addEventListener("click",function(){
    var twelveAmText = document.getElementById("24-text").value;
    localStorage.setItem("twelveAmVal", twelveAmText);
    midnightFunction();
   });

   //display stored event
   function oneAmFunction(){
    var oneStored = localStorage.getItem("oneVal");
    document.getElementById("1-text").innerHTML = oneStored;
   }
   function twoAmFunction(){
    var twoStored = localStorage.getItem("twoVal");
    document.getElementById("2-text").innerHTML = twoStored;
   }
   function threeAmFunction(){
    var threeStored = localStorage.getItem("threeVal");
    document.getElementById("3-text").innerHTML = threeStored;
   }
   function fourAmFunction(){
    var fourStored = localStorage.getItem("fourVal");
    document.getElementById("4-text").innerHTML = fourStored;
   }
   function fiveAmFunction(){
    var fiveStored = localStorage.getItem("fiveVal");
    document.getElementById("5-text").innerHTML = fiveStored;
   }
   function sixAmFunction(){
    var sixStored = localStorage.getItem("sixVal");
    document.getElementById("6-text").innerHTML = sixStored;
   }
   function sevenAmFunction(){
    var sevenStored = localStorage.getItem("sevenVal");
    document.getElementById("7-text").innerHTML = sevenStored;
   }
   function eightAmFunction(){
    var eightStored = localStorage.getItem("eightVal");
    document.getElementById("8-text").innerHTML = eightStored;
   }
   function nineAmFunction(){
     var nineStored = localStorage.getItem("nVal");
     document.getElementById("9-text").innerHTML = nineStored;
   }
   function tenAmFunction(){
     var tenStored = localStorage.getItem("tenVal");
     document.getElementById("10-text").innerHTML = tenStored;
   }
   function elevenAmFunction(){
     var elevenStored = localStorage.getItem("elevenVal");
     document.getElementById("11-text").innerHTML = elevenStored;
   }
   function twelvePmFunction(){
     var twelvePmStored = localStorage.getItem("twelveVal");
     document.getElementById("12-text").innerHTML = twelvePmStored;
   }
   function onePmFunction(){
     var onePmStored = localStorage.getItem("onePmVal");
     document.getElementById("13-text").innerHTML = onePmStored;
   }
   function twoPmFunction(){
     var twoPmStored = localStorage.getItem("twoPmVal");
     document.getElementById("14-text").innerHTML = twoPmStored;
   }
   function threePmFunction(){
     var threePmStored = localStorage.getItem("threePmVal");
     document.getElementById("15-text").innerHTML = threePmStored;
   }
   function fourPmFunction(){
     var fourPmStored = localStorage.getItem("fourPmVal");
     document.getElementById("16-text").innerHTML = fourPmStored;
   }
   function fivePmFunction(){
     var fivePmStored = localStorage.getItem("fivePmVal");
     document.getElementById("17-text").innerHTML = fivePmStored;
   }
   function sixPmFunction(){
    var sixPmStored = localStorage.getItem("sixPmVal");
    document.getElementById("18-text").innerHTML = sixPmStored;
   }
   function sevenPmFunction(){
    var sevenPmStored = localStorage.getItem("sevenPmVal");
    document.getElementById("19-text").innerHTML = sevenPmStored;
   }
   function eightPmFunction(){
    var eightPmStored = localStorage.getItem("eightPmVal");
    document.getElementById("20-text").innerHTML = eightPmStored;
   }
   function ninePmFunction(){
    var ninePmStored = localStorage.getItem("ninePmVal");
    document.getElementById("21-text").innerHTML = ninePmStored;
   }
   function tenPmFunction(){
    var tenPmStored = localStorage.getItem("tenPmVal");
    document.getElementById("22-text").innerHTML = tenPmStored;
   }
   function elevenPmFunction(){
    var elevenPmStored = localStorage.getItem("elevenPmVal");
    document.getElementById("23-text").innerHTML = elevenPmStored;
   }
   function midnightFunction(){
    var twelveAmStored = localStorage.getItem("twelveAmVal");
    document.getElementById("24-text").innerHTML = twelveAmStored;
   }

   //clears localstorage and refreshes page
   document.getElementById("clear-btn").addEventListener("click", function(){
     localStorage.clear();
     location.reload();
   })