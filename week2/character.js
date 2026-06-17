// Kris Lee 6/16/2026
"use strict";

// Introduction message
alert("Welcome Kris, to the floating sky city! Let's start with creating your character.");

// Grab user's character name
let namePrompt = prompt("What will you name your character?", "Wanderer");
const charName = (namePrompt == null || namePrompt == "" ? "Wanderer" : namePrompt);

alert(charName);

// Create pet/companion
const petName = prompt(`What type of companion does ${charName} have? (e.g. Cat, Wolf, Dragon, Fairy, etc.)`);

alert(petName);