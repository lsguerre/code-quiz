var questions = [
    {
        question: "What does CSS stand for?",
        choices: ["Central Style Spot", "Cool Stylish Sheets", "Cascading Style Sheets", "Cascada's Style Sheets"],
        answer: "Cascading Style Sheets"
    },

    {
        question: "String values are enclosed in _____ when they are assigned in variables",
        choices: ["periods", "question marks", "parenthesis", "quotation marks"],
        answer: "quotation marks"
    },

    {
        question: "A Boolean value represents which type of value?",
        choices: ["true/false", "numbers", "strings", "statements"],
        answer: "true/false"

    },

    {
        question: "Generally, what is JavaScript used for?",
        choices: ["Creating coffee related websites", "Making webpages interactive for users", "Reading webpages aloud", "Creating the basic structure of a webpage"],
        answer: "Making webpages interactive for users"
    },

    {
        question: "How would you use an ID selector in CSS and JavaScript?",
        choices: ["# -hashtag", "!- exlamation point", "?- question mark", ". period"],
        answer: "# -hashtag"
    }
]

//some variables
var startBtn = document.getElementById("#start-btn")
var quizQuestion = document.getElementById("#quiz-question")
var timer = document.getElementById("#time-counter")
//functions
startBtn.addEventListener.on("click",  countdown())
//function startGame() {}



function countdown() {
    var timeLeft = 70
    var timeInterval = setInterval(function(){
        if (timeInterval > 0) {
            timer.textContent = timeLeft
            timeLeft--
        } else if (timeLeft === 0) {
            timer.textContent = timeLeft
            timeLeft--

        }else {
            clearInterval(timeInterval)
      } 1000
    }
    )}
