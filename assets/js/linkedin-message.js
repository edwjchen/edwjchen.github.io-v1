function setup(question) {
    switch (question) {
        case "Send":
            $("#que").text("send a linked[in] message")
            break
        case "Kafka":
            $("#que").text("kafka")
            break
        case "Samza":
            $("#que").text("samza")
            break
        case "Brooklin":
            $("#que").text("brooklin")
            break
        case "Ambry":
            $("#que").text("ambry")
            break
        case "Espresso":
            $("#que").text("espresso")
            break
        case "Venice":
            $("#que").text("venice")
            break
        case "Hercules":
            $("#que").text("hercules")
            break
        case "LIquid":
            $("#que").text("liquid")
            break
        case "Nuage":
            $("#que").text("nuage")
            break
        case "Zookeeper":
            $("#que").text("zookeeper")
            break
        case "Flink":
            $("#que").text("flink")
            break
        case "Beam":
            $("#que").text("beam")
            break
        case "Gobblin":
            $("#que").text("gobblin")
            break
        default:
            break
   }    
}

function send(ans) {
    return ans
}

function kafka(ans) {
    return ans
}

function samza(ans) {
    return ans
}

function brooklin(ans) {
    return ans
}

function ambry(ans) {
    return ans
}

function espresso(ans) {
    return ans
}

function venice(ans) {
    return ans
}

function hercules(ans) {
    return ans
}

function liquid(ans) {
    return ans
}

function nuage(ans) {
    return ans
}

function zookeeper(ans) {
    return ans
}

function flink(ans) {
    return ans
}

function beam(ans) {
    return ans
}

function gobblin(ans) {
    return ans
}

function reset() {
    $("#ansbox").text("") 
    $("#anscheck").text("") 
}

function check(ans, checkAns) {
    reset()

    $("#ansbox").text(ans) 
    $("#anscheck").text(checkAns) 
    if (ans === "send a linked[in] message") {    	
        $("#anscheck").css("color", "#0072b1") 
        $(".selected").addClass("correct");
        inputColor()
        return true
    }
    $("#anscheck").css("color", "#e44c65")
    inputColor()
    return false
}


$(function() {
    $('#ans').keyup(function (e) {
        if (e.keyCode === 13) {
            let question = $(".selected").text().trim()
            let ans = $('#ans').val().trim()
            switch (question) {
                case "Send":
                    check(ans, send(ans))
                    break
                case "Kafka":
                    check(ans, kafka(ans))
                    break
                case "Samza":
                    check(ans, samza(ans))
                    break
                case "Brooklin":
                    check(ans, brooklin(ans))
                    break
                case "Ambry":
                    check(ans, ambry(ans))
                    break
                case "Espresso":
                    check(ans, espresso(ans))
                    break
                case "Venice":
                    check(ans, venice(ans))
                    break
                case "Hercules":
                    check(ans, hercules(ans))
                    break
                case "LIquid":
                    check(ans, liquid(ans))
                    break
                case "Nuage":
                    check(ans, nuage(ans))
                    break
                case "Zookeeper":
                    check(ans, zookeeper(ans))
                    break
                case "Flink":
                    check(ans, flink(ans))
                    break
                case "Beam":
                    check(ans, beam(ans))
                    break
                case "Gobblin":
                    check(ans, gobblin(ans))
                    break
                default:
                    break
           }    
        }
    }) 
    

    $(".question").hover(function(){
       $(".question").css("text-decoration", "none") 
       $(this).css("text-decoration", "underline") 
    }, function() {
        $(this).css("text-decoration", "none") 
    }) 

    $(".question").click(function(e) {
        $(".question").removeClass("selected") 
        $(this).addClass("selected") 
        $(this).css("text-decoration", "underline") 
        setup($(this).text())
        $('#ans').val("")
        inputColor()
        reset()
    }) 
 }) 

function inputColor() {
    if ($('.selected').hasClass("correct")) {
        $("#ans").css("border-color", "#0072b1")
    } else {
        $("#ans").css("border-color", "#e44c65")
    }
}