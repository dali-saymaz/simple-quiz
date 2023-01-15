let questionCoanterText=document.getElementById("questionCounter")
let timeText=document.getElementById("timeText")
let scoreText=document.getElementById("score")
let questionText=document.getElementById("question")
let choicesText= Array.from(document.getElementsByClassName("choice-text"))
let timeCounter=10
let availableQuestion = []
let currentQuestion = {}
let score = 0
let question = 0
let acceptingAnswer = true
const CORRECT_POINT = 100/questions.lenght
const MAXIMUM_QUESTION = questions.length
function timePrinter() {
    setInterval(() => {
        timeCounter--
     timeText.innerText=timeCounter
     if (timeCounter==0) {
        getNewQuestion()
        timeCounter=10
     }
    }, 1000);
    
}
timePrinter()




function startGame() {
    score = 0
    question = 0
    availableQuestion=[...questions]
    getNewQuestion()
}
function getNewQuestion() {
    question++
    questionCoanterText.innerHTML=question+"/"+MAXIMUM_QUESTION
    let questionNumber = Math.floor(Math.random()*availableQuestion.length)
    currentQuestion=availableQuestion[questionNumber]
    questionText.innerHTML=currentQuestion.question
    choicesText.forEach(
        choice=>{
            let number = choice.dataset["number"]
            choice.innerText=currentQuestion["choice"+number]
        }
    )
}
startGame()