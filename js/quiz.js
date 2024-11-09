const questions = [
    {
        question: "What is the year simpsons was created",
        options: ["1989", "2001", "1959", "1978"],
        answer: "1989"
    },
    {
        question: "Who is el barto ?",
        options: ["lenny", "bart", "fat tony", "millhouse"],
        answer: "bart"
    },
    {
        question: " what is homer simpsons job",
        options: ["baker", "mayor", "bar tender", "safety inspector"],
        answer: "safety inspector"
    },
    {
        question: "What is  the principle name?",
        options: ["seymour skinner", "edna krabappel", " miss hoover"],
        answer: "seymour skinner"
    },
    {
        question: "What is the clowns name?",
        options: ["krusty", "bubbles", "squeak"],
        answer: "krusty"
    },
    {
        question: "What is  the beer called?",
        options: ["duff", "buff", "bud", "stuff"],
        answer: "duff"
    },
    {
        question: "Who dose bart always prank call ?",
        options: ["carl", "homer", "lenny", "moe"],
        answer: "moe"
    },
    {
        question: "What is  marges madin name?",
        options: ["krabappel", "bouvier", "hoover", " szyslak"],
        answer: "bouvier"
    },
    {
        question: "What is  the person who try's to murder the simpsons called?",
        options: ["side show bob", "carl", "flanders", "barny"],
        answer: "side show bob"
    },
    {
        question: " how many episodes of the simpsons are there in counting...?",
        options: ["100", "400", "500", "773"],
        answer: "773"
    },
  
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h3>${questions[currentQuestion].question}</h3>
        ${questions[currentQuestion].options.map((option, index) => `
            <div>
                <input type="radio" name="option" id="option${index}" value="${option}">
                <label for="option${index}">${option}</label>
            </div>
        `).join('')}
    `;
}

function showNextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }

    const answer = selectedOption.value;
    userAnswers.push(answer);
    if (answer === questions[currentQuestion].answer) score++;

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        if (currentQuestion === questions.length - 1) {
            document.getElementById("next-btn").style.display = "none";
            document.getElementById("submit-btn").style.display = "block";
        }
    }
}

function submitQuiz() {
    let resultHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;
    resultHTML += `<ul>`;
    questions.forEach((q, index) => {
        resultHTML += `
            <li>
                <strong>${q.question}</strong><br>
                Your answer: ${userAnswers[index]}<br>
                Correct answer: ${q.answer}
            </li>
        `;
    });
    resultHTML += `</ul>`;
    
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = resultHTML;
    document.getElementById("submit-btn").style.display = "none";
}

document.getElementById("next-btn").addEventListener("click", showNextQuestion);
document.getElementById("submit-btn").addEventListener("click", submitQuiz);


displayQuestion();
