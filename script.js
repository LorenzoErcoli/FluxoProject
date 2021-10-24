$(document).ready(function() {
	try {
		$('main').ripples({
			resolution: 1500,
			dropRadius: 15, //px
			perturbance: 0.05,
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
		var dropRadius = 15;
		var strength = 0.004 + Math.random() * 0.004;

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
}


function display_ct() {

var x = new Date()

var month=x.getMonth()+1;

if(month==1){month = "gennaio"}
if(month==2){month = "febbraio"}
if(month==3){month = "marzo";}
if(month==4){month = "aprile"}
if(month==5){month = "maggio"}
if(month==6){month = "giugno"}
if(month==7){month = "luglio"}
if(month==8){month = "agosto"}
if(month==9){month = "settembre"}
if(month==10){month = "ottobre"}
if(month==11){month = "novembre"}
if(month==12){month = "dicembre"}


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