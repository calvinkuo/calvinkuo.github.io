//document.onkeydown = function() {
//	if (window.event.keyCode == '13') {
//	colorize();
//	}
//}
function colorize()	{	
	var R1 = document.getElementById('R1').value;
	var G1 = document.getElementById('G1').value;
	var B1 = document.getElementById('B1').value;
	var A1 = document.getElementById('A1').value;
	
	var R2 = document.getElementById('R2').value;
	var G2 = document.getElementById('G2').value;
	var B2 = document.getElementById('B2').value;
	var A2 = document.getElementById('A2').value;
	
	var RB = document.getElementById('RB').value;
	var GB = document.getElementById('GB').value;
	var BB = document.getElementById('BB').value;
	var AB = document.getElementById('AB').value;
	
	var mix = document.getElementById('mix').value;
	
	document.getElementById('front').style.color = 'rgba('+R1+','+G1+','+B1+','+A1+')';
	document.getElementById('front').style.backgroundColor = 'rgba('+R1+','+G1+','+B1+','+A1+')';
	document.getElementById('front').style.mixBlendMode = mix;
	document.getElementById('back').style.color = 'rgba('+R2+','+G2+','+B2+','+A2+')';
	document.getElementById('back').style.backgroundColor = 'rgba('+R2+','+G2+','+B2+','+A2+')';
	document.getElementById('back').style.mixBlendMode = mix;
	document.body.style.backgroundColor = 'rgba('+RB+','+GB+','+BB+','+AB+')';
	
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