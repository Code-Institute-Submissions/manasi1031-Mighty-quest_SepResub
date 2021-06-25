/*jshint esversion: 6 */

// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];

// deck of all cards in game
let deck = document.getElementById("card-deck");

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");

// close icon in popup modal
let closeicon = document.querySelector(".close");

// declare popup modal
let modal = document.getElementById("popup1")

// array for opened cards
let openedCards = [];