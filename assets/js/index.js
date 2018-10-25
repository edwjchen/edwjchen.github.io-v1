var options = {
	strings: ["> Hello world! My name is Edward Chen ^650 <br><br>> ^200 I am a software engineer ^650 <br><br>> ^200 And a part time Pokemon Go player . . . ^650 <br><br>> ^200 anyways ^100 <br><br>> ^200 Check out some of my personal projects below ^650 <br><br>> ^200 Or contact me at ejc042@ucsd.edu ^650 <br><br>> ^200 Error message: ^650 <br><br>> ^200 Segmentation fault (core dumped) ^650 <br><br>> ^200 .  ^100 <br><br>> ^200 .  ^100 <br><br>> ^200 Null Reference found"],
	typeSpeed: 20
}

var typed = new Typed(".text", options)


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("logo").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("logo").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}