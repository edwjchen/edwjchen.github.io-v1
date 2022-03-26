let params = new Map();
let strats;
let filter_strats = [];
let side;
let map;

$(document).ready(function () {
    console.log("ready!");

    // Call applet and get JSON object
    var url =
        "https://script.google.com/macros/s/AKfycbxKDBE6Smz4LhI4TkXa9WXQPyWoL2sMoh-zvBxs-7UPbXllPHOO5NM9R9WOmpybeqDkpg/exec";
    $.getJSON(url, function (d) {
        strats = JSON.parse(d);
    });
});

function capitolize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function addParam(key, param) {
    if (params.has(key) && params.get(key) == param) {
        params.delete(key);
        $("#" + key + "_selection").text("");
    } else {
        params.set(key, param);
    }

    // reset all images
    $(".valimg").css("opacity", "0.3");

    // update images
    params.forEach((value, key) => {
        let id = key + "_" + value;
        $("#" + id).css("opacity", "1");
        let selection_text = capitolize(key) + ": " + value;
        $("#" + key + "_selection")
            .text(selection_text)
            .css("color", "#ffffff");
    });

    filterStrats();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function filterStrats() {
    if (!(params.has("side") && params.has("map"))) return;
    side_ = params.get("side");
    side_ = side_ == "Attacking" ? "Attacker" : side_;
    side_ = side_ == "Defending" ? "Defender" : side_;

    map_ = params.get("map");

    if (side != side_ || map != map_) {
        filter_strats = [];
    }

    side = side_;
    map = map_;

    // filter strats
    for (let i in strats) {
        let strat_side = strats[i]["whatSideAreYouOn"];
        let strat_map = strats[i]["map"];
        if (
            (side == strat_side || side == "Any" || strat_side == "Any") &&
            (map == strat_map || map == "Any" || strat_map == "Any")
        ) {
            filter_strats.push(strats[i]);
        }
    }
    shuffleArray(filter_strats);
}

function selectStrat() {
    let shouldReturn = false;
    if (!params.has("side")) {
        $("#side_selection")
            .text("Please pick a side!")
            .css("color", "#e44c65");
        shouldReturn = true;
    }
    if (!params.has("map")) {
        $("#map_selection").text("Please pick a map!").css("color", "#e44c65");
        shouldReturn = true;
    }
    if (shouldReturn) return;

    if (filter_strats.length > 0) {
        let strat = filter_strats.pop();
        $("#strat_name").text(
            "Name: " +
                (strat.hasOwnProperty("stratName")
                    ? strat["stratName"]
                    : "No name")
        );
        $("#strat_desc").text(
            "Desc: " +
                (strat.hasOwnProperty("stratDesc")
                    ? strat["stratDesc"]
                    : "No desc")
        );
    } else {
        $("#strat_name").text("Out of strats :(");
        $("#strat_desc").html(
            `<div>
                Add more strats
                <a href="https://forms.gle/yVu73RKtMLRPrZDM7" target="_blank" style="color: #e44c65";">
                    here!
                </a>
            </div>`
        );
    }
}
