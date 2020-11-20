// Variable imports from html
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const maincCardEl = document.getElementById('main-card');
const questionCardEl = document.getElementById('question-card');
const timerEL = document.getElementById('timer');
const questionEL = document.getElementById('question');
const answerBtn = document.getElementById('answer-buttons');
const points = document.getElementById('score-count')

let scoreCount = 0;

var getRandomQuestion, questionIndex;

startBtn.addEventListener('click', startGame);

nextBtn.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
});

finishBtn.addEventListener('click', endGame);

function startGame() {
    maincCardEl.classList.add('hide')
    getRandomQuestion = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    questionCardEl.classList.remove('hide')
    timerEL.classList.remove('hide')
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
    questionEL.innerText = question.question;
    question.answers.forEach(answers => {
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

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtn.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (getRandomQuestion.length > questionIndex + 1) {
        nextBtn.classList.remove('hide');
        if (e.target.dataset.correct === 'true') {
            scoreCount++;
            document.getElementById('scoreDisplay').innerHTML = `Points: ${scoreCount}`
        }
    } else {
        if (e.target.dataset.correct === 'true') {
            scoreCount++;
            points.classList.add('hide')
            console.log(scoreCount)
        }
        localStorage.setItem('score', scoreCount);

        finishBtn.classList.remove('hide');
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

function timer() {
    let sec = 120;
    let timer = setInterval(function () {
        document.getElementById('timerDisplay').innerHTML = '' + sec + ' seconds remaining'
        sec--
        if (sec < 0) {
            clearInterval(timer)
            alert('Time has Run out')
            endGame()
        }
     }, 1000)
} 

function endGame() {
    window.location.href = 'scores.html'
}


var questions = [
    {
        question: 'How many Super Bowl rings does Tom Brady have?',
        answers: [
            { text:'2', correct: false},
            { text: '4', correct: false},
            { text: '6', correct: true},
            { text: '5', correct: false}
        ]
    },

    {
        question: 'What is Philadelphias Mascot?',
        answers: [
            { text: 'Giants', correct: false},
            { text: 'Eagles', correct: true},
            { text: 'Falcons', correct: false},
            { text: 'Flyers', correct: false}
        ]
    },

    {
        question: 'Who won the First ever Superbowl?',
        answers: [
            { text: 'Chiefs' , correct: false },
            { text: 'Browns', correct: false },
            { text: 'Bears', correct: false },
            { text: 'Packers', correct: true }
        ]
    },

    {
        question: 'Who one MVP for the 2018 regular season?',
        answers: [
            { text: 'Patrick Mahomes' , correct: true },
            { text: 'Lamar Jackson' , correct: false },
            { text: 'Tom Brady', correct: false },
            { text: 'Russell Wilson', correct: false } 
        ]
    },

    {
        question: 'What year did the NFL Start?',
        answers: [
            { text: '1920' , correct: true },
            { text: '1938', correct: false },
            { text: '1907', correct: false },
            { text: '1960', correct: false }
        ]
    },

    {
        question: 'How many superbowls have the Seattle Seahawks won?',
        answers: [
            { text: '4' , correct: false },
            { text: '0' , correct: false },
            { text: '1', correct: true },
            { text: '2' , correct: false } 
        ]
    },

    {
        question: 'Which NFL team plays at Mile High Stadium?',
        answers: [
            { text: 'Falcons' , correct: false },
            { text: 'Ravens', correct: false },
            { text: 'Titans', correct: false },
            { text: 'Broncos', correct: true }  
        ]
    },
    {
        question: 'Who Led the NFL in Rushing Yards in 2019?',
        answers: [
            { text: 'Derek Henry' , correct: true },
            { text: 'Nick Chubb', correct: false },
            { text: 'Todd Gurley', correct: false },
            { text: 'Alvin Kamara', correct: false } 
        ]
    },

    {
        question: 'Which of the following players is a Wide Receiver?',
        answers: [
            { text: 'Calvin Johnson' , correct: true },
            { text: 'Deshaun Watson', correct: false },
            { text: 'Brian Dawkins', correct: false },
            { text: 'Jalen Ramsey' , correct: false } 
        ]
    },

    {
        question: 'Who is the greatest NFL team?',
        answers: [
            { text: 'not the Patriots' , correct: false },
            { text: 'definitely not the cowboys', correct: false},
            { text: 'Packers? noooo', correct: false },
            { text: 'Eagles!! GO BIRDS', correct: true }  
        ]
    },
]
