var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
console.log(targetNumber);
var randomNumber1 = Math.floor(Math.random() * 12) + 1;
var randomNumber2 = Math.floor(Math.random() * 12) + 1;
var randomNumber3 = Math.floor(Math.random() * 12) + 1;
var randomNumber4 = Math.floor(Math.random() * 12) + 1;
var url0 = "https://i.pinimg.com/originals/c9/73/04/c97304c317de37edafe0eec65f39bc07.png";
var url1 = "https://i-h1.pinimg.com/564x/be/7b/be/be7bbe310b88bdbdd8753569441a1f1c.jpg";
var url2 = "https://i-h1.pinimg.com/564x/99/35/0a/99350ac338d230897dccd9a0385ee716.jpg";
var url3 = "https://mindbodygreen-res.cloudinary.com/image/upload/w_767,q_auto:eco,f_auto,fl_lossy/org/healingcrystalspurplewhite.jpg";
var win = 0;
var lose = 0;
$("#wins").html(win);
$("#loss").html(lose);
var numberOptions = [];
var holder = [];
var images = [url0, url1, url2, url3];

$("#number-to-guess").text(targetNumber);

var counter = 0;
$("#current-score").html(counter);



//reseting the crystal game
function reset() {
    $("#wins").html(win);
    $("#loss").html(lose);
    targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#number-to-guess").text(targetNumber);
    console.log(targetNumber);
    rando1 = Math.floor(Math.random() * 12) + 1;
    rando2 = Math.floor(Math.random() * 12) + 1;
    rando3 = Math.floor(Math.random() * 12) + 1;
    rando4 = Math.floor(Math.random() * 12) + 1;
    console.log(rando1);
    console.log(rando2);
    console.log(rando3);
    console.log(rando4);
    //move all the content in the numberOptions into holder, an empty array
    //push the new four random numbers into numberOption array.
    //the .each switch out the old data-crystalvalue with the new one.  
    holder = numberOptions;
    numberOptions = [];
    numberOptions.push(rando1, rando2, rando3, rando4);
    $.each($('.crystal-image'), function (index, item) {
        $(item).attr('data-crystalvalue', numberOptions[index]);
    });
    counter = 0;
    $("#current-score").html(counter);
}

reset();
console.log(numberOptions);
// Create a for loop to create crystals for every numberOption.

for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", images[i]);


    // Image sizing
    imageCrystal.attr("width", 400);
    imageCrystal.attr("height", 400);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score:" + counter);
    $("#current-score").html(counter);

    if (counter === targetNumber) {
        win++;
        setTimeout(function () {
            alert("You win!");
            reset();
        }, 100)
    }

    else if (counter >= targetNumber) {
        lose++;

        setTimeout(function () {
            alert("You lose!!");
            reset();
        }, 100)
    }

});
reset();
