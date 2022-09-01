var hard = false;
var stop = true;
let maxScore = 0;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let currentLetter = "A";
let score = 0;
let miss = 0;
let pass = "";
let s = 0;

function start(idx) {
    switch (idx) {
        case "pass":
            maxScore = 5;
            code();
            break;
        case "solo":
            maxScore = alphabet.length;
            letter(0);
            break;
    }
}

function enter() {
    i = document.getElementById("input").value;
    document.getElementById("input").value = "";
    if (stop) {
        stop = false;
        ticking();
    }
    if (i.length == 1) {
        if (currentLetter.toLowerCase() == i.toLowerCase()) {
            letter(true);
        } else {
            if (hard) {
                letter(false);
            }
        }
    } else if (i.length == 6) {
        if (pass.toLowerCase() == i.toLowerCase()) {
            score += 1;
            code();
        }
    }
}

function letter(correct) {
    if (typeof correct === "boolean") {
        if (!correct) {
            miss += 1;
        }
        alphabet = alphabet.split(currentLetter).join("");
        score = (26 - miss) - alphabet.length;
        document.getElementById("score").innerHTML = "Score: 26/" + score.toString().padStart(2, 0);
        if (alphabet == "") {
            document.getElementById("letter").src = "letters/Computer_Error_screen.png";
            document.getElementById("length").innerHTML = "Remaining: " + alphabet.length;
            end();
            return;
        }
    }
    currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.getElementById("help").innerHTML = "Help";
    document.getElementById("input").value = "";
    document.getElementById("letter").src = "letters/Error_screen_Letter_" + currentLetter + ".png ";
    document.getElementById("length").innerHTML = "Remaining: " + alphabet.length;
}

function code() {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    pass = ""
    document.getElementById("score").innerHTML = "Score: " + maxScore + "/" + score.toString();
    document.getElementById("length").innerHTML = "Remaining: " + (maxScore - score).toString();
    for (let i = 0; i < document.getElementsByClassName("letter").length; i++) {
        currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        pass += currentLetter
        alphabet = alphabet.split(currentLetter).join("");
        document.getElementsByClassName("letter")[i].src = "letters/Error_screen_Letter_" + currentLetter + ".png ";
    }
    if (score == 5) {
        for (let i = 0; i < document.getElementsByClassName("letter").length; i++) {
            document.getElementsByClassName("letter")[i].src = "letters/Computer_Error_screen.png";
        }
        end();
    }
}

function ticking() {
    if (!stop) {
        s += 1;
        var mins = (s / 60).toFixed().toString().padStart(2, 0);
        var secs = (60 * (s / 60) - (60 * (s / 60).toFixed())).toString().padStart(2, 0);
        document.getElementById("time").innerHTML = mins + ":" + secs;
        setTimeout("ticking()", 1000);
    }
}

function end() {
    stop = true;
    document.getElementById("new").remove();
    document.getElementById("help").remove();
    document.getElementById("input").remove();
    while (document.getElementsByClassName("br").length > 1) {
        document.getElementsByClassName("br")[1].remove();
    }
}

function help() {
    document.getElementById("help").innerHTML = currentLetter;
}

function reset() {
    window.location.reload();
}