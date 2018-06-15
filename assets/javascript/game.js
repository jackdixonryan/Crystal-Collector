$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    //click play to start the game.
    $("#btn").click(function() {
        $("#btn").hide();

        //Show our icons if they're not already visible.
        $(".glyph").show();
        $("#w-l").text("");

        function clear() {
            count = 0;
            randomNumber = 1;
            falconValue = 0;
            eyeValue = 0;
            priestValue = 0;
            ankhValue = 0;
            isGuessed = false;
            isOver = false;
        }

        //set variables
        var count = 0;
        var randomNumber = Math.floor(Math.random() * 100) 
        + 20;; 

        var falconValue = Math.floor(Math.random() * 12 + 1);
        var eyeValue = Math.floor(Math.random() * 12 + 1);
        var priestValue = Math.floor(Math.random() * 12 + 1);
        var ankhValue = Math.floor(Math.random() * 12 + 1);
        console.log(falconValue, eyeValue, priestValue, ankhValue);

        var isGuessed = false;
        var isOver = false;

        //display count
        $("#tally").text(count);

        //generate a random number the user has to guess.


        //display random number.
        var randomNumberDisplay = $("#random-number");
        randomNumberDisplay.html("<h3>" + randomNumber + "</h3>");

        //Defining separate random numbers for each glyph icon. 



        function gameOutcomes() {
            if (count === randomNumber) {
                console.log("Game outcomes thinks count equals random number.")
                isGuessed = true;
            } 
            if (count > randomNumber) {
                console.log("gameOutcomes thinks count is greater than the random number.");
                isOver = true;
            } 
        }

        $("#falcon").click(function() {
            count += falconValue;
            $("#tally").text(count);
        });

        $("#eye").click(function() {
            count += eyeValue;
            $("#tally").text(count);
        });

        $("#priest").click(function() {
            count += priestValue;
            $("#tally").text(count);
        });

        $("#ankh").click(function() {
            count += ankhValue;
            $("#tally").text(count);
        });

        $(".glyph").click(function() {
            gameOutcomes();
            if (isGuessed === true) {
                $("#w-l").html("<h3>You win!</h3>");
                wins++;
                $("#wins").text(wins)
                $(".glyph").hide();
                clear();
                $("#btn").show();
            }
            if (isOver === true) {
                $("#w-l").html("<h3>You lose.</h3>");
                losses++;
                $("#losses").text(losses);
                $(".glyph").hide();
                clear();
                $("#btn").show();
            }
            console.log("WINS: " + wins);
            console.log("LOSSES: " + losses);
        });

    });
});





