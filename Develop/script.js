// Select all html elements
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const highScores = document.getElementById('highScores');
const timer = document.getElementById('timer');
const question = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const ChoiceD = document.getElementById('D');
const verification = document.getElementById('verification');
const allDone = document.getElementById('allDone');
const scorePage = document.getElementById('scorePage');

// Create questions array
let questions = [
    { 
        question: 'Commonly used data types DO Not include:',
        choiceA: 'strings',
        choiceB: 'booleans',
        choiceC: 'alerts',
        ChoiceD: 'numbers',
        correct: 'C'
    },
    {
        question: 'The condition in an if / else statement is enclosed with _______.',
        choiceA: 'quotes',
        choiceB: 'curly brackets',
        choiceC: 'parenthesis',
        ChoiceD: 'square brackets',
        correct: 'C'
    },
    {
        question: 'Arrays in JavaScript can be used to store _________.',
        choiceA: 'numbers and strings',
        choiceB: 'other arrays',
        choiceC: 'booleans',
        ChoiceD: 'all of the above',
        correct: 'D' 
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        choiceA: 'commas',
        choiceB: 'curly brackets',
        choiceC: 'quotes',
        ChoiceD: 'parenthesis',
        correct: 'C' 
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choiceA: 'JavaScript',
        choiceB: 'terminal/bach',
        choiceC: 'for loops',
        ChoiceD: 'console.log',
        correct: 'D' 
    }
];

// Move through questions array.
let questionIndex = questions.length - 1;
let currentQuestionIndex = 0;

function generateQuestion() {
    let q = questions[currentQuestionIndex];
    question.innerHTML = '<p>' + q.question + '</p>';
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ChoiceD.innerHTML = q.ChoiceD;
}

currentQuestionIndex = 0;
generateQuestion();

currentQuestionIndex++
generateQuestion();

// Check answers.
function correctAnswer() {
    document.getElementById(currentQuestionIndex).style.backgroundColor = 'green';
}

function wrongAnswer() {
    document.getElementById(currentQuestionIndex).style.backgroundColor = 'green';
}

// Timer
let timeLeft = 75;
function runTimer() {
    timer.textContent = timeLeft;
    if (timeLeft <= 0) {
        timeUp();
    }
}

function timeUp() {
    console.log('Time is up!')
    quiz.style.display = 'none';
    allDone.style.display = 'block';
    clearInterval(timerInterval);
}

function timeCut() {
    timeLeft--;
    if (wrongAnswer()) {
        timeLeft -= 10; }
    if (timeLeft <= 0) {
        timeUp();
    }
}

function startTime() {
    runTimer();
    var timerInterval = setInterval(function() {
        timeCut();
        runTimer();
    }, 1000);
}
startTime();

