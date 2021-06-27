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

/** Science quiz section */
/** Science section questions */
// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Eating what is important for your health?",
    answer: "A Balanced Diet",
    options: [
        "Sugars",
        "Carbohydrates",
        "A Balanced Diet"
        ]
    },
    {
    numb: 2,
    question: "How many food groups are there in a balanced diet?",
    answer: "Five",
    options: [
        "Five",
        "Six",
        "Seven"
        ]
    },
    {
    numb: 3,
    question: "What are building blocks for the body because they help it grow and repair itself?",
    answer: "Protein",
    options: [
        "Carbohydrates",
        "Protein",
        "Fruits and Vegetables"
        ]
    },
    {
    numb: 4,
    question: "Which products are important because they keep your bones and teeth healthy?",
    answer: "Dairy Products",
    options: [
        "Protein",
        "Carbohydrates",
        "Dairy Products"
        ]
    },
    {
    numb: 5,
    question: "What are full of health-boosting vitamins, antioxidants and fibre?",
    answer: "Fruits and Vegetables",
    options: [
        "Dairy Products",
        "Fruits and Vegetables",
        "Protein"
        ]
    },
    {
        numb: 6,
        question: "Too much of which food group can damage your teeth or make you gain weight?",
        answer: "Fats and Sugars",
        options: [
            "Dairy Products",
            "Fruits and Vegetables",
            "Fats and Sugars"
            ]
        }
];

//Declare variables for Science Quiz
let start_btn = document.querySelector(".start_btn button");
let info_box = document.querySelector(".info_box");
let exit_btn = info_box.querySelector(".buttons .quit");
let continue_btn = info_box.querySelector(".buttons .restart");
let quiz_box = document.querySelector(".quiz_box");
let result_box = document.querySelector(".result_box");
let option_list = document.querySelector(".option_list");
let time_line = document.querySelector("header .time_line");
let timeText = document.querySelector(".timer .time_left_txt");
let timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button is clicked
start_btn.onclick

// if exitQuiz button clicked
exit_btn.onclick

// if continueQuiz button clicked
continue_btn.onclick

// if restartQuiz button clicked
restart_quiz.onclick 

// if quitQuiz button clicked
quit_quiz.onclick

// if Next Question button clicked
next_btn.onclick

// getting questions and options from array
function showQuestions(index)

//if user clicked on option
function optionSelected(answer)

// Show Result function
function showResult()

// Function to start Quiz timer
function startTimer(time)

