window.onscroll = function() {
	var eTop = window.scrollY;
	console.log(eTop)
	if(eTop >= 790){
    	document.getElementById("profile_name").style.textIndent = "-9999px";
    	document.getElementById("profile_name").style.color = "transparent";

	} else {
		document.getElementById("profile_name").style.textIndent = "0px";
		document.getElementById("profile_name").style.color = "white";

	}

	if (eTop > 732) {
		document.getElementById("profile_desc_line1").style.textIndent = "-9999px";
		document.getElementById("profile_desc_line1").style.color = "transparent";
	} else {
		document.getElementById("profile_desc_line1").style.textIndent = "0px";
		document.getElementById("profile_desc_line1").style.color = "white";
	}

	if (eTop > 712) {
		document.getElementById("profile_desc_line2").style.textIndent = "-9999px";
		document.getElementById("profile_desc_line2").style.color = "transparent";
	} else {
		document.getElementById("profile_desc_line2").style.textIndent = "0px";
		document.getElementById("profile_desc_line2").style.color = "white";
	}
};