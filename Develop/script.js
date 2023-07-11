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
        choiceA: '1. strings',
        choiceB: '2. booleans',
        choiceC: '3. alerts',
        ChoiceD: '4. numbers',
        correct: 'C'
    },
    {
        question: 'The condition in an if / else statement is enclosed with _______.',
        choiceA: '1. quotes',
        choiceB: '2. curly brackets',
        choiceC: '3. parenthesis',
        ChoiceD: '4. square brackets',
        correct: 'C'
    },
    {
        question: 'Arrays in JavaScript can be used to store _________.',
        choiceA: '1. numbers and strings',
        choiceB: '2. other arrays',
        choiceC: '3. booleans',
        ChoiceD: '4. all of the above',
        correct: 'D' 
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        choiceA: '1. commas',
        choiceB: '2. curly brackets',
        choiceC: '3. quotes',
        ChoiceD: '4. parenthesis',
        correct: 'C' 
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choiceA: '1. JavaScript',
        choiceB: '2. terminal/bach',
        choiceC: '3. for loops',
        ChoiceD: '4. console.log',
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

//currentQuestionIndex++
//generateQuestion();

// Check answers.
function correctAnswer() {
    // generate correct message with line above here
}

function wrongAnswer() {
    // generate wrong message with line above it here
}

// Timer
let timeLeft = 75;
/*function runTimer() {
    timer.textContent = 'Time: ' + timeLeft;
    if (timeLeft <= 0) {
        timeUp();
    }
}*/

/*function timeCut() {
    timeLeft--;
    if (timeLeft <= 0) {
        timeUp();
    }
}*/
let timerInterval;

function startTime(startImmediately) {
    runTimer();
    if (startImmediately) {
    timerInterval = setInterval(function() {
        runTimer();
        timeCut();
    }, 1000);
}

    function runTimer() {
        timer.textContent = 'Time: ' + timeLeft;
        if (timeLeft <= 0) {
            timeUp();
        }
        }

    function timeCut() {
        timeLeft--;
        if (timeLeft <= 0) {
            timeUp();
        }
    }
}
startTime(false);

function timeUp() {
    clearInterval(timerInterval);
    quiz.style.display = 'none';
    allDone.style.display = 'block';
    renderScore();
}

let score = 0;
function checkAnswer(answer) {
    const selectedAnswer = answer;
    if (questions[currentQuestionIndex].correct === selectedAnswer) {
        score += 20;
        correctAnswer();
        updateScore();
    } else if (questions[currentQuestionIndex].correct !== selectedAnswer) {
        timeLeft -= 10; 
        wrongAnswer();
    }
    if (currentQuestionIndex < questionIndex) {
        currentQuestionIndex++
        generateQuestion();
    } else {
        timeUp();
        renderScore();
    }
}
const startTitle = document.createElement('h1');
startTitle.textContent = 'Coding Quiz Challenge';
start.appendChild(startTitle);
startTitle.classList.add('text-center', 'my-3', 'p-2', 'h1');

const startP = document.createElement('h3');
startP.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
start.appendChild(startP);
startP.classList.add('p-4');

const startBttn = document.createElement('button');
startBttn.textContent = 'Start Quiz';
startBttn.id = 'startBttn';
startP.appendChild(startBttn);
startBttn.addEventListener('click', startQuiz);
startBttn.classList.add('btn', 'btn-primary', 'd-flex', 'mx-auto', 'my-5');



function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";

    generateQuestion();

    startTime(true);
}

function renderScore() {
    if (currentQuestionIndex >= questionIndex || timeLeft <= 0) {
        quiz.style.display = "none";
        allDone.style.display = "block";
    }
}

const allDoneHeader = document.createElement('h3');
    allDoneHeader.textContent = 'All Done!';
    allDone.appendChild(allDoneHeader);

function updateScore() {
    scoreUpdate.textContent = 'Your final score is ' + score + '.';
}
    const scoreUpdate = document.createElement('p');
    scoreUpdate.textContent = 'Your final score is ' + score + '.';
    allDone.appendChild(scoreUpdate);
    
    const initialsEntry = document.createElement('p');
    initialsEntry.textContent = 'Enter initials:';
    allDone.appendChild(initialsEntry);

    const inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'text');
    inputBox.id = 'inputBox';
    allDone.appendChild(inputBox);

    const submitBttn = document.createElement('button');
    submitBttn.textContent = 'Submit';
    submitBttn.id = 'submitBttn';
    allDone.appendChild(submitBttn);
    submitBttn.addEventListener('click', handleSubmit);

    let jsonData;
    let data;
    function handleSubmit() {
        const initials = inputBox.value;
        data = { initials, score };
        jsonData = JSON.stringify(data);
        localStorage.setItem('highScores', jsonData);
        allDone.style.display = 'none';
        scorePage.style.display = "block";
    
        renderScoreList();
    }

    const scoreTitle = document.createElement('h3');
    scoreTitle.textContent = 'High Scores';
    scorePage.appendChild(scoreTitle);

    const goBackBttn = document.createElement('button');
    goBackBttn.textContent = 'Go Back';
    goBackBttn.id = 'goBackBttn';
    scorePage.appendChild(goBackBttn);

    const clearHighScores = document.createElement('button');
    clearHighScores.textContent = 'Clear High Scores';
    clearHighScores.id = 'clearHighScores';
    scorePage.appendChild(clearHighScores);
    
function renderScoreList() {
    const scoreList = document.createElement('ol');
    scorePage.appendChild(scoreList);
    scoreList.innerHTML = '';
    localStorage.getItem('highScores');
    JSON.parse(jsonData);
    const listItem = document.createElement('li');
    listItem.textContent = data.initials + ' - ' + data.score;
    scoreList.appendChild(listItem);
    
    goBackBttn.addEventListener('click', reStart);
    function reStart() {
        clearInterval(timerInterval);
        timeLeft = 75; //seconds
    
        quiz.style.display = 'none';
        scorePage.style.display = 'none';
        //timer.style.display = 'none';
        start.style.display = 'block';

        score = 0;
        currentQuestionIndex = 0;
        startTime(false);
    }

    clearHighScores.addEventListener('click', clearScores);
    function clearScores() {
        scoreList.innerHTML = '';
    }

}



// Break Down
// Select all HTML elements
// Create questions array
// Generate questions
// Check answers logic
// Logic to handle timer and time cuts
// Determine if I want to display the right/wrong answer confirmation like the demo
// Create div for answer check display ::after with line and results of check answer function
// generate and append questions to the doc with one question appearing after the next one is answered. 
// Generate and append "All Done" page and create submission for high score that saves to local storage. 
// Generate and append high scores page that is pulling from local storage to create an ordered list. Use prevent default here. This will have a "go back" button that restarts the quiz and a clear high scores button that clears local storage. 
