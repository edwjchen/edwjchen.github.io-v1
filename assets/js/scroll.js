window.onscroll = function() {
	parallaxText();
	fade();
};

function parallaxText() {
	var eTop = window.scrollY;
	if(eTop >= 850){
    	document.getElementById("profile_name").style.textIndent = "-9999px";
    	document.getElementById("profile_name").style.color = "transparent";

	} else {
		document.getElementById("profile_name").style.textIndent = "0px";
		document.getElementById("profile_name").style.color = "white";
	}

	if (eTop > 762) {
		document.getElementById("profile_desc_line1").style.textIndent = "-9999px";
		document.getElementById("profile_desc_line1").style.color = "transparent";
	} else {
		document.getElementById("profile_desc_line1").style.textIndent = "0px";
		document.getElementById("profile_desc_line1").style.color = "white";
	}

	if (eTop > 730) {
		document.getElementById("profile_desc_line2").style.textIndent = "-9999px";
		document.getElementById("profile_desc_line2").style.color = "transparent";
	} else {
		document.getElementById("profile_desc_line2").style.textIndent = "0px";
		document.getElementById("profile_desc_line2").style.color = "white";
	}
}

function fade() {
	var elements = document.getElementsByClassName("fade");
	var i;
	for (i = 0; i < elements.length; i++) { 
	 	var rect = elements[i].getBoundingClientRect();
	 	if ((rect.top) <= screen.height - screen.height/4) {
	 		$(elements[i]).css('visibility','visible').hide().fadeIn("slow");
	 		elements[i].className = "faded";
	 	}
	}

}