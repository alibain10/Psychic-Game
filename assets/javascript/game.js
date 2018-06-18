
//These are the letters the computer will guess
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//wins & loses set to 0 designates first element in the array. Number of guesses set to 9 is the maximum guess. guessChoices set to any value in the array.
		 var wins = 0;
		 var losses = 0;
		 var numberOfGuesses = 9;
		 var userLetters = [];

//When the user presses a letter key, the computer will randomly pick a letter.
		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	
//if the user and computer equal the same letter the user wins and the number of guesses resets.
			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					numberOfGuesses = 9;
					userLetters = [];
				}

				if (userGuess != computerGuess) {
					numberOfGuesses --;
					userLetters.push(userGuess);
				}

				if (numberOfGuesses === 0) {

				numberOfGuesses = 9;
				losses ++;
				userLetters = [];

				
			}
//this code will write text to the html div tags
			var html = 
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numberOfGuesses + "</p>" +
			"<p>Your Guesses so far: " + userLetters.join(", ") + "</p>";

			document.querySelector("#results").innerHTML = html;

			
			}
		};
