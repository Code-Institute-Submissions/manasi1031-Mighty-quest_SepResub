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


// Science quiz section 
(function(){
    // Set up functions for quiz
    function buildQuiz(){

    }

    function showResults(){
 
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