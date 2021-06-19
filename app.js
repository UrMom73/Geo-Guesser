console.log("Hello and welcome to Geo Guesser babA!! There are 10 rounds to this game. Each round will describe a place and it is YOUR job to guess where that place is! Try not to cheat!");
console.log("To guess what the place is, you will have to call the function geoGuesser(). Inside the parentheses, put in 2 lowercase string arguments: city and country. For example, if I wanted to guess Shanghai, China, I would type: geoGuesser('shanghai','china');  GOT IT!?@#");
console.log("Ok, now that you know how the game works, let's begin! Type in geoGuesser() with no parameters to start!");
let round = -1
let score = 10
function geoGuesser(city,country) {
    round++
    if(city == null && country == null && round == 0) {
        console.log("Description: The Gateway Arch, a 630-foot man-made monument, is located in this place.");
        console.log("Tip: Remember to call the function geoGuesser() and put 2 lowercase string arguments, city and country.");
    }else if(round == 1) {
        if(city == 'st. louis' && country == 'united states') {
            console.log("Correct!");
        }else if(city == 'st louis' && country == 'united states') {
            console.log("Correct!");
        }else if(city == 'saint louis' && country == 'united states') {
            console.log("Correct!");
        }else {
            score--
            console.log("Sorry, but that's incorrect.");
        }console.log("Onto Round 2!");
        console.log("Description: The Big Ben clock tower is located in this place.");
    }else if(round == 2) {
        if(city == 'london' && country == 'england') {
            console.log("That's right!");
        }else if(city == 'london' && country == 'uk') {
            console.log("That's right!");
        }else {
            score--
            console.log("I'm sorry, but that's incorrect.");
        }console.log("Onto the third round!");
        console.log("Description: Christ the Redeemer, a 125-foot-tall statue, is located in this place.");
    }else if(round == 3) {
        if(city == 'rio de janeiro' && country == 'brazil') {
            console.log("That's correct!");
        }else if(city == 'rio de janero' && country == 'brazil') {
            console.log("The correct spelling's Rio de Janeiro, but I'll give this one to you :)");
        }else if(city == 'rio de jenero' && country == 'brazil') {
            console.log("The correct spelling's Rio de Janeiro, but I'll give this one to you :)");
        }else if(city == 'rio' && country == 'brazil') {
            score-0.5
            console.log("The city's name is Rio de Janeiro, not just Rio >:( I'll give you half a point tho :)");
        }else {
            score--
            console.log("I'm sorry, but that's incorrect.");
        }console.log("Onto Round 4! Keep it up!");
        console.log("Description: The Colesseum is located in this place.");
    }else if(round == 4) {
        if(city == 'rome' && country == 'italy') {
            console.log("Correct!");
        }else {
            score--
            console.log("Sorry, but that's incorrect.");
        }console.log("Onto the fifth round!");
        console.log("Description: The Red Square, one of the oldest and largest plazas in the world, is located in this place.");
    }else if(round == 5) {
        if(city == 'moscow' && country == 'russia') {
            console.log("That's right!");
        }else {
            score--
            console.log("Sorry, but that's incorrect.");
        }console.log("Now, onto Round 6!");
        console.log("Description: The Hagia Sophia, a famous religious site for the Byzantines and later the Ottomans, now lies in this location as a museum.");
        console.log("Since this is a bit of a hard one, I'll give you a hint... the city name starts with an 'i'.");
    }else if(round == 6) {
        if(city == 'istanbul' && country == 'turkey') {
            console.log("Thaaat's right! Good job babA!");
        }else {
            score--
            console.log("Sorry, but that's incorrect.");
        }console.log("Onto Round 7! It's getting harder now >:)");
        console.log("Description: The Burj Khalifa, the tallest skyscraper in the world, is located in this place.");
    }else if(round == 7) {
        if(city == 'dubai' && country == 'united arab emirates') {
            console.log("Nice job, that's right!");
        }else if(city == 'dubai' && country == 'u.a.e.') {
            console.log("Nice job, that's right!");
        }else if(city == 'dubai' && country == 'uae') {
            console.log("Nice job, that's right!");
        }else {
            score--
            console.log("I'm sorry, but that's incorrect.");
        }console.log("Now, onto the eighth round! Good luck >:)");
        console.log("Description: The Golden Temple, an important religious site for Sikhs, is located in this place.");
    }else if(round == 8) {
        if(city == 'amritsar' && country == 'india') {
            console.log("Correct!");
        }else {
            score--
            console.log("Incorrect!@#");
        }console.log("Onto Round 9!");
        console.log("Description: This city is an important trading port and economic hub in southeast Asia. It used to be a Dutch colony.");
    }else if(round == 9) {
        if(city == 'jakarta' && country == 'indonesia') {
            console.log("That's right!");
        }else {
            score--
            console.log("That was an EASY one, you should be ashamed!! >:)");
        }console.log("Now, onto the final round! Finish strong!!");
        console.log("Description: This city is the capital of country in west Africa. This country was led by the great revolutionary Thomas Sankara until his assassination in 1987.");
    }else if(round == 10) {
        if(city == 'ouagadougou' && country == 'burkina faso') {
            console.log("Cheater!@#");
        }else {
            score--
            console.log("Incorrect, how did you not know that?!@# GET OUT!!");
        }console.log(`Congratulations, you got a score of ${score}/10! Thanks for playing!`);
        console.log("Note: If you want to know the answers for each round, call geoGuesser() one more time with no paramaters.");
    }else if(round > 10 && city == null && country == null) {
        console.log("1. St. Louis, United States");
        console.log("2. London, England");
        console.log("3. Rio de Janeiro, Brazil");
        console.log("4. Rome, Italy");
        console.log("5. Moscow, Russia");
        console.log("6. Istanbul, Turkey");
        console.log("7. Dubai, United Arab Emirates");
        console.log("8. Amratsar, India");
        console.log("9. Jakarta, Indonesia");
        console.log("10. Ouagadougou, Burkina Faso");
    }else {
        console.log("Sorry, something went wrong. Try again or restart the code.");
    }
}