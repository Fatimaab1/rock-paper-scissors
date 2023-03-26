# rock-paper-scissors

**PLANNING:**


The game I decided to create is rock, paper scissors. The objective was to build a rock-paper-scissors game, where the user can play against the computer. The game requires the user to input their choice of rock, paper, or scissors, and outputs the user's choice, the computer's choice, and the winner of the game.

To plan the project, I took the following steps:

- Defined the objective of the project and broke down the logic of the game into smaller components.


- Created functions to handle each component of the game


- Testing the game using different inputs to ensure it works correctly


- Creating the user interface using HTML and CSS and adding javascript for interactivity.     

&nbsp;

**BUILDING:**
 
I approached the code by breaking down the logic into three main stages: 

- The user input, the computer choice, and comparing user input with computer choice.  
- I then started by creating a function that converts user input to lowercase and checks if the input is either rock, paper, or scissors to avoid any errors that may occur due to incorrect user input.
I then proceeded to create the computer choice by using a function that generates a random choice for the computer between rock, paper, or scissors.


- After that, I created the determineWinner function which compares the user input and the computer choice to determine the winner of the game. In addition, the function also checks if the inputs are the same to determine if there is a tie.


- Finally, I created the playGame function that starts the game by comparing the user input to the computer choice and determining the winner of the game, as well as determining if there is a tie. 


- Once I had completed the game logic and ensured that it was working correctly using console.log, I proceeded to develop the user interface by creating the HTML and CSS code.

&nbsp;

 **DEBUGGING:**

- I tested the code using different inputs to ensure that it was working as expected.

- An error I encountered was receiving a response of undefined when testing in the console. I later realised that the issue was due to incorrect indentation
