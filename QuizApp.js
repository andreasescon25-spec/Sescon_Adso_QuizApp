// ================= QUESTIONS =================

const questions = [

    // ================= SCIENCE =================
  
    {
      category: "Science",
      question: "What planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: "Mars"
    },
  
    {
      category: "Science",
      question: "What gas do humans breathe?",
      choices: ["Oxygen", "Hydrogen", "Nitrogen", "Helium"],
      answer: "Oxygen"
    },
  
    {
      category: "Science",
      question: "What is H2O?",
      choices: ["Salt", "Water", "Hydrogen", "Oxygen"],
      answer: "Water"
    },
  
    {
      category: "Science",
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
  
    {
      category: "Science",
      question: "What force keeps us on the ground?",
      choices: ["Magnetism", "Gravity", "Electricity", "Pressure"],
      answer: "Gravity"
    },
  
    {
      category: "Science",
      question: "What organ pumps blood through the body?",
      choices: ["Brain", "Lungs", "Heart", "Liver"],
      answer: "Heart"
    },
  
    {
      category: "Science",
      question: "How many legs does a spider have?",
      choices: ["6", "8", "10", "12"],
      answer: "8"
    },
  
    {
      category: "Science",
      question: "What star gives Earth light?",
      choices: ["Moon", "Mars", "Sun", "Venus"],
      answer: "Sun"
    },
  
    {
      category: "Science",
      question: "What part of the plant absorbs water?",
      choices: ["Leaf", "Stem", "Flower", "Root"],
      answer: "Root"
    },
  
    {
      category: "Science",
      question: "Which planet do humans live on?",
      choices: ["Mars", "Earth", "Venus", "Mercury"],
      answer: "Earth"
    },
  
  
    // ================= HISTORY =================
  
    {
      category: "History",
      question: "Who discovered America?",
      choices: [
        "Christopher Columbus",
        "Napoleon",
        "Einstein",
        "Newton"
      ],
      answer: "Christopher Columbus"
    },
  
    {
      category: "History",
      question: "Who was the first US president?",
      choices: [
        "George Washington",
        "Lincoln",
        "Jefferson",
        "Obama"
      ],
      answer: "George Washington"
    },
  
    {
      category: "History",
      question: "What ship sank in 1912?",
      choices: [
        "Titanic",
        "Victory",
        "Mayflower",
        "Santa Maria"
      ],
      answer: "Titanic"
    },
  
    {
      category: "History",
      question: "Which country built the pyramids?",
      choices: ["Egypt", "Rome", "China", "India"],
      answer: "Egypt"
    },
  
    {
      category: "History",
      question: "Who invented the telephone?",
      choices: [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Einstein"
      ],
      answer: "Alexander Graham Bell"
    },
  
    {
      category: "History",
      question: "Who was known as the Maid of Orleans?",
      choices: [
        "Cleopatra",
        "Joan of Arc",
        "Queen Elizabeth",
        "Marie Curie"
      ],
      answer: "Joan of Arc"
    },
  
    {
      category: "History",
      question: "What wall divided Berlin from 1961 to 1989?",
      choices: [
        "Great Wall",
        "Berlin Wall",
        "Stone Wall",
        "Iron Wall"
      ],
      answer: "Berlin Wall"
    },
  
    {
      category: "History",
      question: "Who was the leader of Nazi Germany?",
      choices: [
        "Hitler",
        "Churchill",
        "Napoleon",
        "Stalin"
      ],
      answer: "Hitler"
    },
  
    {
      category: "History",
      question: "Who wrote the Declaration of Independence?",
      choices: [
        "Jefferson",
        "Washington",
        "Lincoln",
        "Franklin"
      ],
      answer: "Jefferson"
    },
  
    {
      category: "History",
      question: "What war was fought between the North and South in the US?",
      choices: [
        "World War I",
        "Civil War",
        "Cold War",
        "Revolutionary War"
      ],
      answer: "Civil War"
    },
  
  
    // ================= TECHNOLOGY =================
  
    {
      category: "Technology",
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "HighText Machine Language",
        "Hyperlinks Text Machine Language"
      ],
      answer: "Hyper Text Markup Language"
    },
  
    {
      category: "Technology",
      question: "Which company made the iPhone?",
      choices: [
        "Samsung",
        "Apple",
        "Microsoft",
        "Google"
      ],
      answer: "Apple"
    },
  
    {
      category: "Technology",
      question: "What language is used for web interactivity?",
      choices: [
        "Python",
        "C++",
        "JavaScript",
        "Java"
      ],
      answer: "JavaScript"
    },
  
    {
      category: "Technology",
      question: "What does CSS stand for?",
      choices: [
        "Computer Style Sheets",
        "Creative Style System",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
  
    {
      category: "Technology",
      question: "What does CPU stand for?",
      choices: [
        "Central Processing Unit",
        "Computer Power Unit",
        "Central Program Utility",
        "Control Processing Unit"
      ],
      answer: "Central Processing Unit"
    },
  
    {
      category: "Technology",
      question: "Which device moves the cursor on screen?",
      choices: ["Keyboard", "Monitor", "Mouse", "Printer"],
      answer: "Mouse"
    },
  
    {
      category: "Technology",
      question: "Which company created Windows?",
      choices: ["Apple", "Google", "Microsoft", "IBM"],
      answer: "Microsoft"
    },
  
    {
      category: "Technology",
      question: "What symbol is used for IDs in CSS?",
      choices: [".", "#", "@", "&"],
      answer: "#"
    },
  
    {
      category: "Technology",
      question: "Which HTML tag creates the biggest heading?",
      choices: ["<h6>", "<head>", "<h1>", "<p>"],
      answer: "<h1>"
    },
  
    {
      category: "Technology",
      question: "What is considered the brain of the computer?",
      choices: ["RAM", "CPU", "Monitor", "Keyboard"],
      answer: "CPU"
    }
  
  ];
  
  
  // ================= VARIABLES =================
  
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");
  
  const questionText = document.getElementById("question-text");
  const choicesContainer = document.getElementById("choices-container");
  const feedback = document.getElementById("feedback");
  
  const finalScore = document.getElementById("final-score");
  const answerBreakdown = document.getElementById("answer-breakdown");
  
  const playAgainBtn = document.getElementById("play-again");
  
  const categoryButtons =
    document.querySelectorAll(".category-btn");
  
  let playerName = "";
  let selectedQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let results = [];
  
  
  // ================= CATEGORY BUTTONS =================
  
  categoryButtons.forEach(button => {
  
    button.addEventListener("click", () => {
  
      playerName =
        document.getElementById("player-name").value;
  
      if (playerName === "") {
        alert("Please enter your name.");
        return;
      }
  
      const category = button.dataset.category;
  
      startQuiz(category);
  
    });
  
  });
  
  
  // ================= START QUIZ =================
  
  function startQuiz(category) {
  
    startScreen.classList.add("hidden");
  
    quizScreen.classList.remove("hidden");
  
    selectedQuestions =
      questions.filter(q => q.category === category);
  
    currentQuestionIndex = 0;
  
    score = 0;
  
    results = [];
  
    showQuestion();
  
  }
  
  
  // ================= SHOW QUESTION =================
  
  function showQuestion() {
  
    feedback.textContent = "";
  
    const currentQuestion =
      selectedQuestions[currentQuestionIndex];
  
    questionText.textContent =
      currentQuestion.question;
  
    choicesContainer.innerHTML = "";
  
    currentQuestion.choices.forEach(choice => {
  
      const button = document.createElement("button");
  
      button.textContent = choice;
  
      button.classList.add("choice-btn");
  
      button.addEventListener("click", () => {
  
        checkAnswer(choice);
  
      });
  
      choicesContainer.appendChild(button);
  
    });
  
  }
  
  
  // ================= CHECK ANSWER =================
  
  function checkAnswer(selectedChoice) {
  
    const currentQuestion =
      selectedQuestions[currentQuestionIndex];
  
    const isCorrect =
      selectedChoice === currentQuestion.answer;
  
    if (isCorrect) {
  
      score++;
  
      feedback.textContent = "Correct!";
  
    } else {
  
      feedback.textContent =
        "Wrong! Correct answer: " +
        currentQuestion.answer;
  
    }
  
    results.push({
      question: currentQuestion.question,
      selected: selectedChoice,
      correct: currentQuestion.answer,
      isCorrect: isCorrect
    });
  
    setTimeout(() => {
  
      currentQuestionIndex++;
  
      if (
        currentQuestionIndex <
        selectedQuestions.length
      ) {
  
        showQuestion();
  
      } else {
  
        showResults();
  
      }
  
    }, 1000);
  
  }
  
  
  // ================= SHOW RESULTS =================
  
  function showResults() {
  
    quizScreen.classList.add("hidden");
  
    resultScreen.classList.remove("hidden");
  
    finalScore.textContent =
      playerName +
      ", your score is " +
      score +
      "/" +
      selectedQuestions.length;
  
    answerBreakdown.innerHTML = "";
  
    results.forEach(result => {
  
      const div = document.createElement("div");
  
      div.innerHTML = `
        <hr>
        <p><strong>${result.question}</strong></p>
        <p>Your Answer: ${result.selected}</p>
        <p>Correct Answer: ${result.correct}</p>
      `;
  
      answerBreakdown.appendChild(div);
  
    });
  
  }
  
  
  // ================= PLAY AGAIN =================
  
  playAgainBtn.addEventListener("click", () => {
  
    resultScreen.classList.add("hidden");
  
    startScreen.classList.remove("hidden");
  
  });