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