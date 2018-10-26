var option = {
    strings: ["> Hello world! My name is Edward Chen ^300 <br><br>> ^200 I am a software engineer ^300 <br><br>> ^200 And a part time Pokemon Go player . . . ^300 <br><br>> ^200 anyways ^100 <br><br>> ^200 Check out some of my personal projects"],
    typeSpeed: 20,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[0].style.display = "none";
      var typed2 = new Typed(".text2", option2)
    }
}

var option2 = {
    strings: ["<u>below</u> ^300"],
    typeSpeed: 20,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[1].style.display = "none";
      var typed3 = new Typed(".text3", option3)
    }
}

var option3 = {
    strings: ["<br><br>> ^200 Or contact me at ejc042@ucsd.edu ^300 <br><br>> ^200 Error message: ^300 <br><br>> ^200 Segmentation fault (core dumped) ^300 <br><br>> ^200 .  ^100 <br><br>> ^200 .  ^100 <br><br>> ^200 .  ^100 <br><br>> ^200"],
    typeSpeed: 20,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[2].style.display = "none";
      var typed4 = new Typed(".text4", option4)
    }
}

var option4 = {
    strings: ["Null pointer exception? ^200", "Running gdb ^200", "Placing break statements ^200", "Null pointer found ^200", "Refactoring code ^200", "Need more coffee ^200", "Adding more code", "More bugs found"],
    typeSpeed: 50,
    backSpeed: 20,
    smartBackspace: true, // this is a default
    loop: true
}


var typed = new Typed(".text", option)

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