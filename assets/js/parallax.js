window.onscroll = function() {
	var eTop = window.scrollY;
	if(eTop >= 900){
    	document.getElementById("profile_name").style.textIndent = "-9999px";
	} else {
		document.getElementById("profile_name").style.textIndent = "0px";
	}

	if (eTop > 800) {
		document.getElementById("profile_desc").style.textIndent = "-9999px";
	} else {
		document.getElementById("profile_desc").style.textIndent = "0px";
	}
};