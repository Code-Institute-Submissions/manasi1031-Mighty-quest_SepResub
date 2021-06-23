/*jshint esversion: 6 */

/** Function to view quiz by subject 
 * This should initiate the subject view only
*/
function openQuiz(event, subject) {
    let i;
    let quizData = document.getElementsByClassName("quiz-data");
    for (i = 0; i < quizData.length; i++) {
        quizData[i].style.display = "none";
    }
    let quizLinks = document.getElementsByClassName("quiz-links");
    for (i = 0; i < quizLinks.length; i++) {
        quizLinks[i].className = quizLinks[i].className.replace(" active", "");
    }
    document.getElementById(subject).style.display = "block";
    event.currentTarget.className += " active";
}

/**
 * Geography Quiz Data Overview
 */
//Create Questions

let questions = [
    new question("In a Compass, what does N stand for?", ["Nice", "North", "Nest"], "North"),
    new question("In a Compass, what does S stand for?", ["Sea", "Sun", "South"], "South"),
    new question("In a Compass, what does E stand for?", ["East", "Egg", "Elephant"], "East"),
    new question("In a Compass, what does W stand for?", ["West", "Whale", "Wise"], "West"),
    new question("In a Compass, what does NE stand for?", ["November", "Never", "North-East"], "North-East"),
    new question("In a Compass, what does SE stand for?", ["Surrender", "Summer", "South-East"], "South-East"),
    new question("In a Compass, what does SW stand for?", ["Sweet", "Swish", "South-West"], "South-West"),
    new question("In a Compass, what does NW stand for?", ["Nowhere", "Not-weary", "North-West"], "North-West"),
];

// Quiz prototype for questions, answers and guess
function quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

function question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};

quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};

