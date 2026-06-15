const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ROUND_LABELS = {
    qualifying: "Classificatòria",
    semifinalA: "Semifinal A",
    semifinalB: "Semifinal B",
    final: "Final"
};

const clue = (text, answers) => ({ text, answers });

const questionSets = {
    qualifying: [
        clue("Ió amb càrrega elèctrica negativa.", ["anió"]),
        clue("Model atòmic amb electrons en òrbites quantitzades.", ["bohr"]),
        clue("Nombre que indica la proporció d'una substància en una equació química ajustada.", ["coeficient"]),
        clue("Científic que va formular la teoria atòmica moderna escolar.", ["dalton"]),
        clue("Part de la química que estudia les proporcions entre reactius i productes.", ["estequiometria"]),
        clue("Representació dels elements i subíndexs d'un compost.", ["fórmula"]),
        clue("Representació visual de dades, molt utilitzada en cinemàtica.", ["gràfica"]),
        clue("Element químic més lleuger de la taula periòdica.", ["hidrogen"]),
        clue("Àtom o grup d'àtoms amb càrrega elèctrica.", ["ió"]),
        clue("Unitat d'energia del Sistema Internacional.", ["joule", "joules", "juls"]),
        clue("Escala absoluta de temperatura.", ["kelvin"]),
        clue("Científic relacionat amb la llei de conservació de la massa.", ["lavoisier"]),
        clue("Unitat de quantitat de substància del Sistema Internacional.", ["mol"]),
        clue("Partícula subatòmica sense càrrega elèctrica.", ["neutró"]),
        clue("Regió de l'espai on és probable trobar un electró.", ["orbital"]),
        clue("Nom general de certes lleis clàssiques de la química.", ["ponderals"]),
        clue("Ciència que estudia la composició i transformació de la matèria.", ["química"]),
        clue("Substàncies inicials d'una reacció química.", ["reactius"]),
        clue("Element químic no metàl·lic de símbol S.", ["sulfur", "sofre"]),
        clue("Model atòmic conegut pel descobriment de l'electró en el tub de raigs catòdics.", ["thomson"]),
        clue("Compost binari format per oxigen i un altre element.", ["òxid", "oxid"]),
        clue("Magnitud que indica l'espai recorregut per unitat de temps i direcció.", ["velocitat"]),
        clue("Unitat de potència del Sistema Internacional.", ["watt"]),
        clue("Àcid oxigenat format per hidrogen, oxigen i un altre element.", ["oxoàcid", "oxoacid"]),
        clue("Element químic de símbol Y.", ["itri"]),
        clue("Element químic metàl·lic de símbol Zn.", ["zinc"])
    ],
    semifinalA: [
        clue("Canvi de velocitat per unitat de temps.", ["acceleració", "acceleracio"]),
        clue("Cognom del científic que va proposar els nivells energètics de l'àtom.", ["bohr"]),
        clue("Factor numèric que acompanya una fórmula química en una equació ajustada.", ["coeficient"]),
        clue("Científic de la teoria atòmica moderna.", ["dalton"]),
        clue("Partícula subatòmica amb càrrega negativa.", ["electró", "electro"]),
        clue("Magnitud capaç de modificar l'estat de moviment d'un cos.", ["força", "forca"]),
        clue("Representació de la posició, la velocitat o l'acceleració en funció del temps.", ["gràfica", "grafica"]),
        clue("Element químic de nombre atòmic 1.", ["hidrogen"]),
        clue("Ió amb càrrega positiva.", ["catió", "catio"]),
        clue("Magnitud associada a la capacitat de produir canvis.", ["energia"]),
        clue("Element químic de símbol K.", ["potassi"]),
        clue("Instrument de laboratori per mesurar volums de líquids.", ["proveta"]),
        clue("Diagrama utilitzat per distribuir els electrons en capes i subnivells.", ["moeller", "möller"]),
        clue("Part central de l'àtom.", ["nucli"]),
        clue("Trajectòria definida dels electrons en el model de Bohr.", ["òrbita", "orbita"]),
        clue("Partícula subatòmica amb càrrega positiva.", ["protó", "proto"]),
        clue("Disciplina que permet calcular quantitats de substància en una reacció.", ["estequiometria"]),
        clue("Procés químic en què una espècie guanya electrons.", ["reducció", "reduccio"]),
        clue("Element químic de símbol S, també anomenat sulfur.", ["sofre", "sulfur"]),
        clue("Model atòmic del púding de panses.", ["thomson"]),
        clue("Procés químic en què una espècie perd electrons.", ["oxidació", "oxidacio"]),
        clue("Magnitud vectorial que expressa el canvi de posició per unitat de temps.", ["velocitat"]),
        clue("Cognom associat a la unitat de potència.", ["watt"]),
        clue("Àcid que conté oxigen a la seva fórmula.", ["oxoàcid", "oxoacid"]),
        clue("Element químic de símbol Y.", ["itri"]),
        clue("Element metàl·lic de símbol Zn.", ["zinc"])
    ],
    semifinalB: [
        clue("Partícula que constitueix la matèria i conserva les propietats d'un element.", ["àtom", "atom"]),
        clue("Cognom del científic del model d'òrbites quantitzades.", ["bohr"]),
        clue("Quantitat de solut dissolta en una determinada quantitat de dissolució.", ["concentració", "concentracio"]),
        clue("Cognom del científic de la teoria atòmica escolar moderna.", ["dalton"]),
        clue("Part de la química que estudia les proporcions en una reacció.", ["estequiometria"]),
        clue("Compost binari de l'oxigen amb un altre element.", ["òxid", "oxid"]),
        clue("Canvi de posició d'un cos respecte d'un sistema de referència.", ["moviment"]),
        clue("Nom tradicional de l'àcid H2S.", ["sulfhídric", "sulfhidric"]),
        clue("Espècie química amb càrrega elèctrica neta.", ["ió", "io"]),
        clue("Unitat d'energia del Sistema Internacional.", ["joule", "joules", "juls"]),
        clue("Escala absoluta de temperatura utilitzada en ciència.", ["kelvin"]),
        clue("Nom general d'un conjunt de lleis clàssiques de la química.", ["ponderals"]),
        clue("Unitat de quantitat de substància.", ["mol"]),
        clue("Part central de l'àtom on hi ha protons i neutrons.", ["nucli"]),
        clue("Família d'àcids que contenen oxigen.", ["oxoàcid", "oxoacid"]),
        clue("Partícula subatòmica amb càrrega positiva.", ["protó", "proto"]),
        clue("Procés en què unes substàncies es transformen en unes altres.", ["reacció", "reaccio"]),
        clue("Substància inicial que participa en una reacció.", ["reactiu"]),
        clue("Element químic de símbol S.", ["sulfur", "sofre"]),
        clue("Cognom del model atòmic del púding de panses.", ["thomson"]),
        clue("Substància obtinguda al final d'una reacció química.", ["producte"]),
        clue("Magnitud que expressa el desplaçament per unitat de temps.", ["velocitat"]),
        clue("Unitat de potència elèctrica o mecànica.", ["watt"]),
        clue("Compost binari d'oxigen amb un altre element.", ["òxid", "oxid"]),
        clue("Acceleració amb què la Terra atrau els cossos.", ["gravetat"]),
        clue("Element químic metàl·lic de símbol Zn.", ["zinc"])
    ],
    final: [
        clue("Partícula bàsica que conserva les propietats d'un element.", ["àtom", "atom"]),
        clue("Cognom del científic del model amb nivells energètics.", ["bohr"]),
        clue("Nombre que acompanya les substàncies en una equació química ajustada.", ["coeficient"]),
        clue("Científic associat a la teoria atòmica moderna.", ["dalton"]),
        clue("Part de la química que treballa les proporcions entre substàncies.", ["estequiometria"]),
        clue("Representació simbòlica d'un compost o substància.", ["fórmula", "formula"]),
        clue("Representació visual de magnituds com posició, velocitat o temps.", ["gràfica", "grafica"]),
        clue("Element químic més simple de la taula periòdica.", ["hidrogen"]),
        clue("Espècie química amb càrrega elèctrica.", ["ió", "io"]),
        clue("Unitat d'energia del Sistema Internacional.", ["joule", "joules", "juls"]),
        clue("Element químic de símbol K.", ["potassi"]),
        clue("Unitat de capacitat molt utilitzada al laboratori.", ["litre"]),
        clue("Diagrama utilitzat per ordenar la configuració electrònica.", ["moeller", "möller"]),
        clue("Part central de l'àtom on es concentra gairebé tota la massa.", ["nucli"]),
        clue("Regió de probabilitat de localització electrònica.", ["orbital"]),
        clue("Nom general de certes lleis clàssiques de la química.", ["ponderals"]),
        clue("Ciència que estudia la matèria i els seus canvis.", ["química", "quimica"]),
        clue("Científic que va descriure un model nuclear de l'àtom.", ["rutherford"]),
        clue("Element químic no metàl·lic de símbol S.", ["sulfur", "sofre"]),
        clue("Cognom del descobridor de l'electró.", ["thomson"]),
        clue("Compost binari de l'oxigen amb un altre element.", ["òxid", "oxid"]),
        clue("Magnitud que relaciona espai recorregut i temps.", ["velocitat"]),
        clue("Unitat de potència del Sistema Internacional.", ["watt"]),
        clue("Àcid que conté oxigen a la seva composició.", ["oxoàcid", "oxoacid"]),
        clue("Tipus de moviment que segueix una trajectòria en línia recta.", ["rectilini"]),
        clue("Element químic de símbol Zn.", ["zinc"])
    ]
};

const roundSelect = document.getElementById("roundSelect");
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const roundTitle = document.getElementById("roundTitle");
const gameState = document.getElementById("gameState");
const currentLetter = document.getElementById("currentLetter");
const questionIndex = document.getElementById("questionIndex");
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const checkButton = document.getElementById("checkButton");
const passButton = document.getElementById("passButton");
const markCorrectButton = document.getElementById("markCorrectButton");
const markIncorrectButton = document.getElementById("markIncorrectButton");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackText = document.getElementById("feedbackText");
const rosco = document.getElementById("rosco");
const timerDisplay = document.getElementById("timerDisplay");
const scoreValue = document.getElementById("scoreValue");
const correctValue = document.getElementById("correctValue");
const incorrectValue = document.getElementById("incorrectValue");
const pendingValue = document.getElementById("pendingValue");
const timeValue = document.getElementById("timeValue");

let gameStateData = createInitialState();
let timerInterval = null;

function createInitialState() {
    return {
        roundKey: roundSelect.value,
        questions: [],
        statuses: LETTERS.map(() => "pending"),
        queue: [],
        currentIndex: -1,
        correct: 0,
        incorrect: 0,
        pending: LETTERS.length,
        score: 0,
        timeLeft: 0,
        running: false
    };
}

function normalize(text) {
    return text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[·.,;:!?'"()]/g, "")
        .replace(/\s+/g, " ");
}

function buildRosco() {
    rosco.innerHTML = "";
    const total = LETTERS.length;
    const radius = 43;

    LETTERS.forEach((letter, index) => {
        const angle = ((index / total) * Math.PI * 2) - (Math.PI / 2);
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        const letterEl = document.createElement("div");
        letterEl.className = "letter pending";
        letterEl.dataset.index = String(index);
        letterEl.textContent = letter;
        letterEl.style.left = `calc(${x}% - 5.5%)`;
        letterEl.style.top = `calc(${y}% - 5.5%)`;
        rosco.appendChild(letterEl);
    });
}

function updateRosco() {
    const letterEls = rosco.querySelectorAll(".letter");
    letterEls.forEach((letterEl, index) => {
        letterEl.className = "letter";
        letterEl.classList.add(gameStateData.statuses[index]);
        if (index === gameStateData.currentIndex && gameStateData.running) {
            letterEl.classList.add("current");
        }
    });
}

function formatTime(totalSeconds) {
    const safeSeconds = Math.max(0, totalSeconds);
    const minutes = Math.floor(safeSeconds / 60);
    const seconds = safeSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateStats() {
    scoreValue.textContent = String(gameStateData.score);
    correctValue.textContent = String(gameStateData.correct);
    incorrectValue.textContent = String(gameStateData.incorrect);
    pendingValue.textContent = String(gameStateData.pending);
    timeValue.textContent = formatTime(gameStateData.timeLeft);
    timerDisplay.textContent = formatTime(gameStateData.timeLeft);
}

function setFeedback(type, message) {
    feedbackBox.classList.remove("success", "error", "info");
    if (type) {
        feedbackBox.classList.add(type);
    }
    feedbackText.textContent = message;
}

function setControls(enabled) {
    answerInput.disabled = !enabled;
    checkButton.disabled = !enabled;
    passButton.disabled = !enabled;
    markCorrectButton.disabled = !enabled;
    markIncorrectButton.disabled = !enabled;
}

function readSelectedTime() {
    const minutes = Number.parseInt(minutesInput.value, 10) || 0;
    const seconds = Number.parseInt(secondsInput.value, 10) || 0;
    return Math.max(30, (minutes * 60) + Math.min(Math.max(seconds, 0), 59));
}

function loadCurrentQuestion() {
    if (gameStateData.currentIndex === -1) {
        finishGame();
        return;
    }

    const question = gameStateData.questions[gameStateData.currentIndex];
    const answered = gameStateData.correct + gameStateData.incorrect;
    const currentNumber = answered + 1;

    roundTitle.textContent = ROUND_LABELS[gameStateData.roundKey];
    currentLetter.textContent = LETTERS[gameStateData.currentIndex];
    questionIndex.textContent = `Pregunta ${currentNumber} de ${LETTERS.length}`;
    questionText.textContent = question.text;
    answerInput.value = "";
    answerInput.focus();
    gameState.textContent = "Partida en curs.";
    setFeedback("info", "Resposta pendent de validació.");
    updateRosco();
}

function startTimer() {
    stopTimer();
    timerInterval = window.setInterval(() => {
        if (!gameStateData.running) {
            return;
        }

        gameStateData.timeLeft -= 1;
        updateStats();

        if (gameStateData.timeLeft <= 0) {
            gameStateData.timeLeft = 0;
            updateStats();
            setFeedback("error", "S'ha acabat el temps.");
            finishGame();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        window.clearInterval(timerInterval);
        timerInterval = null;
    }
}

function nextQuestion() {
    gameStateData.currentIndex = gameStateData.queue.length ? gameStateData.queue.shift() : -1;
    loadCurrentQuestion();
}

function finishGame() {
    gameStateData.running = false;
    stopTimer();
    setControls(false);
    updateRosco();
    gameState.textContent = `Partida acabada. Puntuació final: ${gameStateData.score} punts.`;
    currentLetter.textContent = "-";
    questionIndex.textContent = `Resoltes ${gameStateData.correct + gameStateData.incorrect} de ${LETTERS.length}`;
    questionText.textContent = "No queden preguntes pendents en aquesta ronda.";
}

function applyResult(result) {
    const index = gameStateData.currentIndex;
    if (index === -1 || !gameStateData.running) {
        return;
    }

    if (gameStateData.statuses[index] === "pending" || gameStateData.statuses[index] === "passed") {
        gameStateData.pending -= 1;
    }

    if (result === "correct") {
        gameStateData.statuses[index] = "correct";
        gameStateData.correct += 1;
        gameStateData.score += 1;
        setFeedback("success", "Resposta correcta.");
    } else {
        gameStateData.statuses[index] = "incorrect";
        gameStateData.incorrect += 1;
        setFeedback("error", `Resposta incorrecta. Solució: ${gameStateData.questions[index].answers[0]}.`);
    }

    updateStats();
    updateRosco();

    if (gameStateData.pending <= 0 || gameStateData.queue.length === 0) {
        gameStateData.currentIndex = -1;
        finishGame();
        return;
    }

    nextQuestion();
}

function checkAnswer() {
    if (!gameStateData.running || gameStateData.currentIndex === -1) {
        return;
    }

    const userAnswer = normalize(answerInput.value);
    const validAnswers = gameStateData.questions[gameStateData.currentIndex].answers.map(normalize);

    if (!userAnswer) {
        setFeedback("info", "Escriu una resposta o utilitza els botons de correcció manual.");
        answerInput.focus();
        return;
    }

    if (validAnswers.includes(userAnswer)) {
        applyResult("correct");
        return;
    }

    applyResult("incorrect");
}

function passQuestion() {
    if (!gameStateData.running || gameStateData.currentIndex === -1) {
        return;
    }

    const index = gameStateData.currentIndex;
    if (gameStateData.statuses[index] === "pending") {
        gameStateData.statuses[index] = "passed";
    }

    gameStateData.queue.push(index);
    setFeedback("info", "Pregunta passada. Tornarà al final de la cua.");
    updateRosco();
    nextQuestion();
}

function startGame() {
    stopTimer();
    gameStateData = createInitialState();
    gameStateData.roundKey = roundSelect.value;
    gameStateData.questions = questionSets[gameStateData.roundKey];
    gameStateData.statuses = LETTERS.map(() => "pending");
    gameStateData.queue = LETTERS.map((_, index) => index);
    gameStateData.currentIndex = 0;
    gameStateData.correct = 0;
    gameStateData.incorrect = 0;
    gameStateData.pending = LETTERS.length;
    gameStateData.score = 0;
    gameStateData.timeLeft = readSelectedTime();
    gameStateData.running = true;

    roundTitle.textContent = ROUND_LABELS[gameStateData.roundKey];
    setControls(true);
    updateStats();
    updateRosco();
    setFeedback("info", "Partida iniciada.");
    nextQuestion();
    startTimer();
}

function resetGame() {
    stopTimer();
    gameStateData = createInitialState();
    gameStateData.timeLeft = readSelectedTime();
    gameStateData.pending = LETTERS.length;
    roundTitle.textContent = ROUND_LABELS[roundSelect.value];
    gameState.textContent = "Prem “Començar partida” per iniciar el rosco.";
    currentLetter.textContent = "A";
    questionIndex.textContent = `Pregunta 1 de ${LETTERS.length}`;
    questionText.textContent = "La pista apareixerà aquí quan comenci la partida.";
    answerInput.value = "";
    setControls(false);
    setFeedback("", "Sense resposta registrada encara.");
    buildRosco();
    updateStats();
}

roundSelect.addEventListener("change", () => {
    if (!gameStateData.running) {
        roundTitle.textContent = ROUND_LABELS[roundSelect.value];
    }
});

minutesInput.addEventListener("input", () => {
    if (!gameStateData.running) {
        gameStateData.timeLeft = readSelectedTime();
        updateStats();
    }
});

secondsInput.addEventListener("input", () => {
    if (!gameStateData.running) {
        gameStateData.timeLeft = readSelectedTime();
        updateStats();
    }
});

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
checkButton.addEventListener("click", checkAnswer);
passButton.addEventListener("click", passQuestion);
markCorrectButton.addEventListener("click", () => applyResult("correct"));
markIncorrectButton.addEventListener("click", () => applyResult("incorrect"));
answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

buildRosco();
resetGame();
