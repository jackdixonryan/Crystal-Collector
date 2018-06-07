$(document).ready(function() {

    //We have to generate a random number, have it be unpredictable, and have it be high enough that the glyphs won't ever be larger than it. 

    var randomNumber = Math.floor(Math.random() * 31) 
    + Math.floor(Math.random() * 31);


    //Defining separate random numbers for each glyph icon. 

    var falconValue = Math.floor(Math.random() * 10 +1)
    var eyeValue = Math.floor(Math.random() * 10 +1)
    var priestValue = Math.floor(Math.random() * 10 +1)
    var ankhValue = Math.floor(Math.random() * 10 +1)

    var count = 0;

    var randomNumberDisplay = $("#random-number");

    randomNumberDisplay.text(randomNumber);

    console.log(falconValue, eyeValue, priestValue, ankhValue);

    //Each button works for itself, but starting an if/else statement with count after the button click functions only returns the initialized value for count, that is, 0.

    //It has to be a scoping problem.

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

});

