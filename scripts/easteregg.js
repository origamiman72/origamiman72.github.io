var eggEnabled = false;

function easterEgg() {
    eggEnabled = !eggEnabled;
    updateEgg();
}

function updateEgg() {
    if (eggEnabled) {
        // document.body.style.background = "linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)";
        $("body").css("background", "linear-gradient(to right, red,orange , yellow, green, cyan, blue, violet)");
        $(".container").css("background", "linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)")
        $(".container").css("font-family", "Comic Sans MS")
        $("h1").css("font-family", "Comic Sans MS")
        $("h2").css("font-family", "Comic Sans MS")
        $("h3").css("font-family", "Comic Sans MS")
        $("p").css("font-family", "Comic Sans MS")
        $("h4").css("font-family", "Comic Sans MS")
        $("button").css("font-family", "Comic Sans MS")
        $(".container").css("color", "black")
        $("header").css("background", "linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)")
        $("nav").css("background", "linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)")
        $(".card").css("background", "linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)")
        $(".project").css("background", "linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)")
        $("#landing").css("background", "linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)")
        $("#landingText h1").replaceWith("<h1>Hi, I'm Abhik Ahuja, <br> I regret this<span class=\"orange\">.</span></h1>")
    } else {
        $("body").css("background", "")
        $(".container").css("background", "")
        $(".container").css("font-family", "")
        $("h1").css("font-family", "")
        $("h2").css("font-family", "")
        $("h3").css("font-family", "")
        $("p").css("font-family", "")
        $("h4").css("font-family", "")
        $("button").css("font-family", "")
        $(".container").css("color", "")
        $("header").css("background", "")
        $("nav").css("background", "")
        $(".card").css("background", "")
        $(".project").css("background", "")
        $("#landing").css("background", "")

        $("#landingText h1").replaceWith("<h1>Hi, I'm Abhik Ahuja, a Computer Science and Mathematics student at UC Berkeley<span class=\"orange\">.</span></h1>")
    }
}