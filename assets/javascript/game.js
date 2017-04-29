//Array with the possible answers
var wordBank = ['quarterback', 'football', 'cheerleader', 'offense', 'defense', 'lineman', 'touchdown', 'kickoff', 'touchback', 'safety']

//Chooses a random item from wordBank
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//Printing the contents of wordBank to the console
console.log(wordBank);

//displays the output to HTML
//document.getElementById("chosenWord").innerHTML = chosenWord;

//Prints to the random element chosen from the array to the console
console.log(chosenWord);

//creates underscores
var wordLength = chosenWord.length;
var userGuesses = [];
var guessWord = [];
for (i = 0; i < wordLength; i++) {
    guessWord[i] = "_";
}

//Prints underscores value to console.log
console.log(guessWord);
//Displays underscores output to HTML
//document.getElementById("guessWord").innerHTML = guessWord;

//Gets user input
//var userText = document.getElementById("user-text");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
    //userText.textContent = event.key;
    var userInput = event.key;
    console.log(userInput);
    userGuesses.push(userInput);
    var splitWord = chosenWord.split("").join("");
    console.log(splitWord);

    for (var j = 0; j < splitWord.length; j++) {
        //fill in with the chosen letter
        if (splitWord[j] == userInput) {
            guessWord[j] = userInput;
        }
        // log wins
        var winsCounter = 0;
        if (guessWord == splitWord) {
            winsCounter++;
        };
    }
    document.getElementById("guessWord").innerHTML = guessWord;

    //checking if letter has already been guessed and filling it in
    if (userInput !== userGuesses.indexOf(userInput)) {
        document.getElementById("userGuesses").innerHTML = userGuesses.toString();
    }

    document.getElementById("winsCounter").innerHTML = winsCounter;
};
console.log(userGuesses);
