// Variable imports from html
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const maincCardEl = document.getElementById('main-card');
const questionCardEl = document.getElementById('question-card');
const timer = document.getElementById('timer');
const question = document.getElementById('question');
const answerBtn = document.getElementById('answer-buttons');
const points = document.getElementById('score-count')

let scoreCount = 0;

const getRandomQuestion, questionIndex

startBtn.addEventListener('click', startGame);

nextBtn.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
});

finishBtn.addEventListener('click', endGame);

function startGame() {
    maincCardEl.classList.add('hide')
    getRandomQuestion = quesitons.sort(() => Math.random() - .5)
    questionIndex = 0
    questionCardEl.classList.remove('hide')
    timer.classList.remove('hide')
    points.classList.remove('hide')
    nextQuestion()
    timer()
}

function nextQuestion() {
    resetState()
    showQuestion(getRandomQuestion[questionIndex])
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function showQuestion(question) {
    question.innerText = question.question;
    quesiton.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text;
        button.classList.add('btn');
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }  
        button.addEventListener('click', selectAnswer)
        answerBtn.appendChild(button); 
        
    })
}




