//Array with the possible answers
var wordBank = ['Quarterback', 'Football', 'Cheerleader', 'Offense', 'Defense', 'Lineman', 'Touchdown', 'Kickoff', 'Touchback', 'Safety']

//Chooses a random item from wordBank
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//Printing the contents of wordBank to the console
console.log(wordBank);

//displays the output to HTML
document.getElementById("chosenWord").innerHTML = chosenWord;

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
document.getElementById("guessWord").innerHTML = guessWord;

//Defining remainingLetters
var remainingLetters = chosenWord.length;
//Gets user input
var userText = document.getElementById("user-text");
// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
    userText.textContent = event.key;
    var userInput = event.key;
    console.log(userInput);
    userGuesses.push(userInput);
    for (var j = 0; j < chosenWord.length; j++) {
        if (chosenWord[j] === userInput) {
            guessWord[j] = userInput;
            remainingLetters--;
        }
    }
    // log wins
    var winsCounter = 0

    if (chosenWord === guessWord) {
        winsCounter++;
    };

    document.getElementById("winsCounter").innerHTML = winsCounter;
};
console.log(userGuesses);
document.getElementById("userGuesses").innerHTML = userGuesses;


// log userInput from onkeyup function
console.log(document.onkeyup.userInput)
    //fill in with the chosen letter

// log wins
//var winsCounter = 0

//if (userInput === "f"){
//winsCounter++;
//};

//document.getElementById("winsCounter").innerHTML = winsCounter;
