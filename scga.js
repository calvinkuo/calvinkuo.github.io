document.addEventListener("DOMContentLoaded", function(){
	var script = document.createElement("script");
	script.innerHTML = 'var element = document.querySelector("body > div:last-of-type");element.parentNode.removeChild(element);';
	document.body.appendChild(script);
});

var sc_project=10093404; 
var sc_invisible=1; 
var sc_security="ad17771f"; 
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" + scJsHost+"statcounter.com/counter/counter.js'></"+"script>");

(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments);};i[r].l=1*new Date();a=s.createElement(o);
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56193807-1', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');