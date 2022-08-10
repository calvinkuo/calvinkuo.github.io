//document.onkeydown = function() {
//	if (window.event.keyCode == '13') {
//	colorize();
//	}
//}
function colorize()	{	
	var H1 = document.getElementById('H1').value.toString();
	var S1 = (document.getElementById('S1').value.toString()+'%').replace('%%','%');
	var L1 = (document.getElementById('L1').value.toString()+'%').replace('%%','%');
	var A1 = document.getElementById('A1').value.toString();
	
	var H2 = document.getElementById('H2').value.toString();
	var S2 = (document.getElementById('S2').value.toString()+'%').replace('%%','%');
	var L2 = (document.getElementById('L2').value.toString()+'%').replace('%%','%');
	var A2 = document.getElementById('A2').value.toString();
	
	var HB = document.getElementById('HB').value.toString();
	var SB = (document.getElementById('SB').value.toString()+'%').replace('%%','%');
	var LB = (document.getElementById('LB').value.toString()+'%').replace('%%','%');
	var AB = document.getElementById('AB').value.toString();
	
	var mix = document.getElementById('mix').value;
	
	document.getElementById('front').style.color = 'hsla('+H1+','+S1+','+L1+','+A1+')';
	document.getElementById('front').style.backgroundColor = 'hsla('+H1+','+S1+','+L1+','+A1+')';
	document.getElementById('front').style.mixBlendMode = mix;
	document.getElementById('back').style.color = 'hsla('+H2+','+S2+','+L2+','+A2+')';
	document.getElementById('back').style.backgroundColor = 'hsla('+H2+','+S2+','+L2+','+A2+')';
	document.getElementById('back').style.mixBlendMode = mix;
	document.body.style.backgroundColor = 'hsla('+HB+','+SB+','+LB+','+AB+')';
	
	if (!('backgroundBlendMode' in document.body.style))
	{
		document.body.style.backgroundImage = 'none';
	}
	
	if (!('mixBlendMode' in document.body.style))
	{
		document.getElementById('mixing').style.display = 'none';
	}
	
	return false;
}