
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime();},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i;}  // add zero in front of numbers < 10
    return i;
}

//Start Date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}



function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}


//The forismatic Api
$(document).ready(function(){
 getQuote();
 var quotes;
 var author;
 function getQuote(){
    
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url,function(data){
    $("#text").html(" "+data.quoteText);
    $("#author").html(data.quoteAuthor);
  });
  }
  
  $('#new-quote').on("click",function(){
  getQuote();
  });
  
   $("#tweet-quote").click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + $("#text").html() + " " + $("#author").html());  
  });
  
});

var color = Math.floor(Math.random() * colors.length);
  $("html body").animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $(".button").animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );

 
 function getRandomColor() {
  var letters = '0123456789ABCDEF'; 
  var color = '#';
   for (var i = 0; i < 6; i++) { 
   color += letters[Math.floor(Math.random() * 16)]; } return color; 
   } 
