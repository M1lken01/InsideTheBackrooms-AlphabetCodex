let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let currentLetter = "A";
let score = 26 - alphabet.length;

function enter() {
    i = document.getElementById("input").value;
    if (i.length > 1) {
        i = i.split("")[0];
    }
    if (currentLetter.toLowerCase() == i) {
        letter(true);
    }
    document.getElementById("input").value = "";
}

function letter(correct) {
    if (correct) {
        alphabet = alphabet.split(currentLetter).join("");
        score = 26 - alphabet.length;
        document.getElementById("score").innerHTML = "26/" + score
        if (score == 26) {
            document.getElementById("letter").src = "letters/Computer_Error_screen.png";
            document.getElementById("test").innerHTML += '<button onclick="reset()">Reset</button><br>'
                //document.getElementById("reset").classList.remove("hidden");
            document.getElementById("new").remove();
            document.getElementById("help").remove();
            document.getElementById("input").remove();
            while (document.getElementsByClassName("br").length > 1) {
                document.getElementsByClassName("br")[1].remove();
            }
            return;
        }
    }
    currentLetter =
        alphabet[Math.floor(Math.random() * alphabet.length)];
    document.getElementById("help").innerHTML = "Help";
    document.getElementById("input").value = "";
    document.getElementById("letter").src =
        "letters/Error_screen_Letter_" + currentLetter + ".png";
}

function help() {
    document.getElementById("help").innerHTML = currentLetter;
}

function reset() {

}