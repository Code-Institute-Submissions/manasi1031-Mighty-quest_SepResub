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
 * Geography Quiz Data Overview - BLANK
 */


// Science quiz section in local scope
(function(){
    // Set up functions for quiz
    function buildQuiz(){
        //variable to show output
        let output = [];
        // for each question asked
        myQuestions.forEach (
            (currentQuestion, questionNumber) => {
                // variable for each answer
                let answers = [];
                for(letter in currentQuestion.answers) {
                    // ...add a checkbox
                    answers.push(
                    `<label>
                    <input type="checkbox" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                    );
                }
                // add this question and its answers to the output
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );
        // finally combine our output list into one string of HTML and put it on the page
        quizBox.innerHTML = output.join('');
    }

    function showResults(){
        // gather answer box from quiz
        let answerBoxes = quizBox.querySelectorAll('.answers');
        // keep track of user answers
        let correctAnswer = 0;
        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                // find selected answer
                let answerBox = answerBoxes[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerBox.querySelector(selector) || {}).value;
                // if answer is correct
                if(userAnswer === currentQuestion.correctAnswer){
                // add to the number of correct answers
                correctAnswer++;
                // color the answers green
                answerBoxes[questionNumber].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else {
                // color the answers red
                answerBoxes[questionNumber].style.color = 'red';
                }
            });
            // show number of correct answers out of total
            resultsBox.innerHTML = `${correctAnswer} out of ${myQuestions.length}`;
        }

    // elements for variables
    let quizBox = document.getElementById('quiz');
    let resultsBox = document.getElementById('results');
    let submitBtn = document.getElementById('submit');
    // Set of questions
    let myQuestions 

    // display quiz 
    buildQuiz();

    // Show results on submit
    submitBtn.addEventListener('click', showResults);
})();