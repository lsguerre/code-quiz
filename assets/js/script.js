var questions = [
    {
        title: "What does CSS stand for?",
        choices: ["Central Style Spot", "Cool Stylish Sheets", "Cascading Style Sheets", "Cascada's Style Sheets"],
        answer: "Cascading Style Sheets"
    },

    {
        title: "String values are enclosed in _____ when they are assigned in variables",
        choices: ["periods", "question marks", "parenthesis", "quotation marks"],
        answer: "quotation marks"
    },

    {
        title: "A Boolean value represents which type of value?",
        choices: ["true/false", "numbers", "strings", "statements"],
        answer: "true/false"

    },

    {
        title: "Generally, what is JavaScript used for?",
        choices: ["Creating coffee related websites", "Making webpages interactive for users", "Reading webpages aloud", "Creating the basic structure of a webpage"],
        answer: "Making webpages interactive for users"
    },

    {
        title: "How would you use an ID selector in CSS and JavaScript?",
        choices: ["# -hashtag", "!- exlamation point", "?- question mark", ". period"],
        answer: "# -hashtag"
    }
]

//variables
var startBtn = document.querySelector("#start-btn")
var quizTitle = document.getElementById("questionTitle")
var timer = document.getElementById("time-counter")
var score = 0
var questionsIndex = 0
var timeLeft = 70
var quizBox = document.getElementById('quiz-box')
var createUl = document.createElement('ul')




document.getElementById("start-btn").addEventListener("click", function () {
    var timeLeft = 70
    var timeInterval = setInterval(function (){
        if (timeLeft >= 0) {
            timer.textContent = "Time remaining: " +  timeLeft + " seconds"
            timeLeft--
        } else {
            timer.textContent = ""
            clearInterval(timeInterval)
            displayQuestion()
        }
      }, 1000)

      displayQuestion()
})

    function displayQuestion() {
        quizBox.innerHTML=''
        createUl.innerHTML=''
        
        for (var i=0; i < questions.length; i++) {
            var questionTitle = questions[questionsIndex].title
            var answerChoice = questions[questionsIndex].choices
            
            quizBox.textContent= questionTitle
        }
        answerChoice.forEach(function (answerChoice) {
                var createLi = document.createElement('li')
                createLi.textContent = answerChoice
                quizBox.appendChild(createUl)
                createUl.appendChild(createLi)
            })
            

        
    }
    
   

