let questionCoanterText=document.getElementById("questionCounter")
let timeText=document.getElementById("timeText")
let scoreText=document.getElementById("score")
let questionText=document.getElementById("question")
let choicesText= Array.from(document.getElementsByClassName("choice-text"))
console.log(choicesText)

let timeCounter=10
let availableQuestion = []
let currentQuestion = {}
let score = 0
let question = 0
let acceptingAnswer = true
const CORRECT_POINT = 100/questions.lenght
const MAXIMUM_QUESTION = questions.length

function startGame() {
    score = 0
    question = 0
    availableQuestion=[...questions]
    getNewQuestion()
}