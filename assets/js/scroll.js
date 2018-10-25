window.onscroll = function() {
	reveal();
};

function reveal() {
	var eTop = window.scrollY;
	if (eTop < 425) {
		document.getElementById("lt").style.top = eTop+"px";
		var length = 75-eTop
		if (length < 0) {
			length = 0;
		}
		document.getElementById("lt").style.borderTop = length+"px solid transparent";
	} else {
		document.getElementById("lt").style.top = (eTop+100)+"px";
		var newTop = eTop - 425
		document.getElementById("bt").style.left = newTop+"px";
		document.getElementById("bt").style.borderLeft = newTop+"px solid transparent";
	}
}

function reset() {

}