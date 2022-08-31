const hard = false;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let currentLetter = "A";
let score = 26 - alphabet.length;
let miss = 0;

function enter() {
    i = document.getElementById("input").value;
    if (i.length > 1) {
        i = i.split("")[0];
    }
    document.getElementById("input").value = "";
    if (currentLetter.toLowerCase() == i) {
        letter(true);
    } else {
        if (hard) {
            letter(false);
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
            document.getElementById("abc").innerHTML = "no letter left";
            document.getElementById("new").remove();
            document.getElementById("help").remove();
            document.getElementById("input").remove();
            while (document.getElementsByClassName("br").length > 1) {
                document.getElementsByClassName("br")[1].remove();
            }
            return;
        }
    }
    currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.getElementById("help").innerHTML = "Help";
    document.getElementById("input").value = "";
    document.getElementById("letter").src = "letters/Error_screen_Letter_" + currentLetter + ".png ";
    document.getElementById("abc").innerHTML = alphabet;
}

function help() {
    document.getElementById("help").innerHTML = currentLetter;
}

function reset() {
    window.location.reload();
}