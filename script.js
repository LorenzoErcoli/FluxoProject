(function(){   
  if (window.addEventListener)
  {
    window.addEventListener("load", nascondi_loading_screen, false);    
  }else{
    window.attachEvent("onload", nascondi_loading_screen);
  }
})();
function nascondi_loading_screen()
{
  // document.getElementById("loading_screen").style.display = 'none';
  $("#loading_screen").animate({opacity: 1},1000)
  $("#loading_text").animate({opacity: 0},2000)
  $("#loading_screen").animate({opacity: 0},2600)
  $("#loading_screen").animate({display: 'none'},2600)

  setTimeout(function() {removeloading()} ,2800)

  function removeloading(){
	  var el = document.getElementById('loading_screen')
	  el.remove()
  }
}



$(document).ready(function() {
	var w = window.innerWidth;
	var	h = window.innnerHeight;

	if (w < 900){
		var value_resolution = 1500
		var value_perturbance = 0.002
		var value_drop = 0.04
		console.log("miao")
	}else{
		var value_resolution = 1500
		var value_perturbance = 0.05
		var value_drop = 400
		var value_drop = 0.004
	}

	try {
		$('main').ripples({
			resolution: value_resolution,
			dropRadius: 18, //px
			perturbance: value_perturbance,
			strength: 1,
		});
	}

	catch (e) {
		$('.error').show().text(e);
	}

	setInterval(function() {
		var $el = $('main');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 18;
		var strength = value_drop + Math.random() * value_drop;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);

});


var x = document.getElementById("simple_audio");

function playaudio(){
	x.play()
}

function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh);
mytime=setTimeout('scrollBaloon()',refresh);
}


function display_ct() {

var x = new Date()

var month=x.getMonth()+1;

if(month==1){month = "GENNAIO"}
if(month==2){month = "FEBRAIO"}
if(month==3){month = "MARZO";}
if(month==4){month = "APRILE"}
if(month==5){month = "MAGGIO"}
if(month==6){month = "GIUGNO"}
if(month==7){month = "LUGLIO"}
if(month==8){month = "AGOSTO"}
if(month==9){month = "SETTEMBRE"}
if(month==10){month = "OTTOBRE"}
if(month==11){month = "NOVEMBRE"}
if(month==12){month = "DICEMBRE"}


var day=x.getDate();
var year=x.getFullYear();
if (month <10 ){month='0' + month;}
if (day <10 ){day='0' + day;}
var x3= day+'  '+month+'  '+year;

var hour=x.getHours();
var minute=x.getMinutes();
var second=x.getSeconds();
if(hour <10 ){hour='0'+hour;}
if(minute <10 ) {minute='0' + minute; }
if(second<10){second='0' + second;}
var x4 = hour+' : '+minute+' : '+second

document.getElementById('inputDate').innerHTML = x3;
document.getElementById('inputTime').innerHTML = x4;
display_c();
}

	function scrollBaloon(){
	  var hei = $(window).height();
	  var wid = $(window).width();

	  
	  if (wid > 600){
	    $(document).ready(function(){
	    $("#baloon").animate({height: "10px", width: "10px", opacity: 0.6,},100)
		$("#baloon").animate({height: "10px", width: "10px", opacity: 0.6,},1000);
		$("#baloon").animate({"margin-top": "60px", height: "3px", width: "3px",  opacity: 0.2},1000);
		$("#baloon").animate({"margin-top": "20px", opacity: 0,},1500);
		});  
	  }else{ 
	    $(document).ready(function(){
	  	$("#baloon").animate({height: "10px", width: "10px", opacity: 0.6,},100)
		$("#baloon").animate({height: "10px", width: "10px", opacity: 0.6,},1000);
		$("#baloon").animate({"margin-top": "60px", height: "3px", width: "3px",  opacity: 0.2},1000);
		$("#baloon").animate({"margin-top": "20px", opacity: 0,},1500);
	  });
	  }
	}