window.onscroll = function() {
	var eTop = window.scrollY;
	console.log(eTop)
	console.log(document.getElementById("profile_name").style.textIndent)
	if(eTop >= 900){
    	document.getElementById("profile_name").style.textIndent = "-9999px";
	} else {
		document.getElementById("profile_name").style.textIndent = "0px";
	}
};