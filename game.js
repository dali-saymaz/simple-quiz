let questionCoanterText=document.getElementById("questionCounter")
let timeText=document.getElementById("timeText")
let scoreText=document.getElementById("score")
let questionText=document.getElementById("question")
let choicesText= Array.from(document.getElementsByClassName("choice-text"))
let timeCounter=4
let availableQuestion = []
let currentQuestion = {}
let score = 0
let question = 0
let acceptingAnswer = false
const CORRECT_POINT = 100/questions.length
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
    if (questionCounter>=MAXIMUM_QUESTION || availableQuestion.length===0) {
        return window.location.assign("./index.html")
    }
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
    availableQuestion.splice(questionNumber,1)
    acceptingAnswer=true

}

choicesText.forEach(
   choice=> {
        choice.addEventListener("click", e=>{
            if(!acceptingAnswer)
            return
            acceptingAnswer=false
            let selectedChoice = e.target
            let selectedAnswer = selectedChoice.dataset["number"]
            let classToApply = selectedAnswer==currentQuestion.answer ? "correct":"incorrect"
            console.log(classToApply)
            if (classToApply==="correct") {
                incrementScore(CORRECT_POINT)
            }
            selectedChoice.parentElement.classList.add(classToApply)
            setTimeout(
                ()=>{
                    selectedChoice.parentElement.classList.remove(classToApply)
                    getNewQuestion()
                },700
            )
        })
        
    }
)

incrementScore=num=>{
    score+=num
    scoreText.innerText=score
}    

startGame()

