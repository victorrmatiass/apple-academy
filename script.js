const questions = [
    {
        question: "Sou estudante de Ciência da Computação?",
        correct: "Sim!",
        wrong: "Não! É de E.C"
    },
    {
        question: "Estudei Elétrica no IFPE?",
        correct: "Sim!",
        wrong: "Não!"
    },
    {
        question: "Gosto de dorama e Kpop?",
        correct: "Sim",
        wrong: "Nunca no Brasil!"
    },
    {
        question: "Minha linguagem favorita?",
        correct: "Python",
        wrong: "Assembly"
    },
    {
        question: "Passa tempo favorito?",
        correct: "Andar de bikezinha do Itaú",
        wrong: "Conversar com o chat GPT"
    }
]

function playPopSound(){
    const popSound = document.querySelector(".popSound")
    popSound.play()
}
function playWrongSound(){
    const wrongSound = document.querySelector(".wrongSound")
    wrongSound.play()
}

function victory(){
    const quizContainer = document.querySelector(".quizContainer")
    const victorContainer = document.querySelector(".victoryContainer")
    const victorySound = document.querySelector(".victorySound")
    quizContainer.style.display = "none"
    victorContainer.style.display = "flex"
    victorySound.play()
}
let questionNumber = -1

function goToHome(){
 questionNumber = -1
 attQuestion()
 const apresentationContainer = document.querySelector(".widthContainer") 
 const victorContainer = document.querySelector(".victoryContainer")

 apresentationContainer.style.display = "flex"
 victorContainer.style.display = "none"

}

function startQuiz(){
    const apresentationContainer = document.querySelector(".widthContainer") 
    const quizContainer = document.querySelector(".quizContainer")
    apresentationContainer.style.display = "none"
    quizContainer.style.display = "block"
    playPopSound()
}

function attQuestion(){
    playPopSound()
    questionNumber++
    if(questionNumber >= questions.length) return victory()
    const {question, wrong, correct} = questions[questionNumber]
    const buttons = document.querySelector('.buttons')
    let inverseRow = questionNumber % 2
    if(inverseRow == 1) buttons.style.flexDirection = 'row-reverse'
    else buttons.style.flexDirection = 'row'
    const htmlQuestionTitle = document.querySelector(".question")
    const correctBtn = document.querySelector(".correct")
    const wrongBtn = document.querySelector(".wrong")

    htmlQuestionTitle.innerHTML = question
    wrongBtn.innerHTML = wrong
    correctBtn.innerHTML = correct
}
attQuestion()

function moveQuestion(){
    playWrongSound()
    let newWidth = Math.floor(Math.random() * 201) - 100;
    let newHeight = Math.floor(Math.random() * (100));
    const quizContainer = document.querySelector(".quizContainer")
    quizContainer.style.transform   = `translate(${newWidth}%, ${newHeight}%)`
}

