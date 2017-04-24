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
var underscores = "";
for(i=0; i<wordLength; i++) {
    underscores = underscores + "_ "
}
//Prints underscores value to console.log
console.log(underscores);

//Displays underscores output to HTML
document.getElementById("underscores").innerHTML = underscores;

var userText = document.getElementById("user-text");
      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        userText.textContent = event.key;
        var userInput = event.key
        console.log(userInput)
      };

// log userInput from onkeyup function
      console.log(document.onkeyup.userInput)

