function ie() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		$("title").text("SERBON DENIES INTERNET EGGSPLODER");
		$("body").html("\
		<div id='internetexploder'>\
			<span style='font-size: 2em'>NO KITTENS FOR YOU</span><br>\
			<span>You are using Internet Exploder</span><br>\
			<span>Please consider getting a different browser</span><br><br>\
			<span>Why?<br>Because programming a website with Internet Exploder support... is horribly hard.</span><br>\
			<span>Better browsers:<br>\
			<a href='http://chrome.google.com'>Google Chrome</a>\
			<a href='http://www.apple.com/safari'>Apple Safari</a>\
			<a href='http://www.mozilla.com/firefox'>Mozilla Firefox</a>\
			</span>\
		</div>");
		return true;
		//This function will never be called. Congratulations, you discovered my code
		alert("I still hate you, Microsoft :) -Creeps");
	}
	return false;
}

$(document).ready(function(){
	
	//Don't mess with IE.
	if( ie() ) {
		return;
	}
	
});