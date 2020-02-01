const startButton = document.getElementById("start-btn")
const nextButton =document.getElementById("next-btn")
const questionContainer = document.getElementById("question-container")

startButton.addEventListener("click", startQuiz)
function startQuiz() {
    console.log("started")
    startButton.classList.add("hide")
    nextButton.classList.remove("hide")
    questionContainer.remove("hide")
}

function showNextQuestion() {

}

function selectAnswer() {

}