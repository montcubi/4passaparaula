const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ROUND_LABELS = {
    qualifying: "Classificatòria",
    semifinalA: "Semifinal A",
    semifinalB: "Semifinal B",
    final: "Final"
};

const clue = (text, answers) => ({ text, answers });

const BANKS = {
    bank1: [
        clue("Ió amb càrrega elèctrica negativa.", ["anió"]),
        clue("Model atòmic amb electrons en òrbites quantitzades.", ["bohr"]),
        clue("Nombre que indica la proporció d'una substància en una equació química ajustada.", ["coeficient"]),
        clue("Científic que va formular la teoria atòmica moderna escolar.", ["dalton"]),
        clue("Part de la química que estudia les proporcions entre reactius i productes.", ["estequiometria"]),
        clue("Part de la química que consisteix a escriure correctament les fórmules dels compostos.", ["formulació", "formulacio"]),
        clue("Representació visual de dades, molt utilitzada en cinemàtica.", ["gràfica", "grafica"]),
        clue("Element químic més lleuger de la taula periòdica.", ["hidrogen"]),
        clue("Àtom o grup d'àtoms amb càrrega elèctrica.", ["ió", "io"]),
        clue("Unitat d'energia del Sistema Internacional.", ["joule", "joules", "juls"]),
        clue("Escala absoluta de temperatura.", ["kelvin"]),
        clue("Científic relacionat amb la teoria atòmica moderna.", ["dalton"]),
        clue("Unitat de quantitat de substància del Sistema Internacional.", ["mol"]),
        clue("Partícula subatòmica sense càrrega elèctrica.", ["neutró", "neutro"]),
        clue("Element químic del període 3 i grup 17 de la taula periòdica.", ["clor"]),
        clue("Nom general de certes lleis clàssiques de la química.", ["ponderals"]),
        clue("Ciència que estudia la composició i transformació de la matèria.", ["química", "quimica"]),
        clue("Substàncies inicials d'una reacció química.", ["reactius"]),
        clue("Element químic no metàl·lic de símbol S.", ["sulfur", "sofre"]),
        clue("Model atòmic conegut pel descobriment de l'electró.", ["thomson"]),
        clue("Compost binari format per oxigen i un altre element.", ["òxid", "oxid"]),
        clue("Magnitud que indica l'espai recorregut per unitat de temps i direcció.", ["velocitat"]),
        clue("Unitat de potència del Sistema Internacional.", ["watt"]),
        clue("Àcid oxigenat format per hidrogen, oxigen i un altre element.", ["oxoàcid", "oxoacid"]),
        clue("Element químic del període 3 i grup 13 de la taula periòdica.", ["alumini"]),
        clue("Element químic metàl·lic de símbol Zn.", ["zinc"])
    ],
    bank2: [
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
        clue("Conjunt de regles per posar nom als compostos químics.", ["nomenclatura"]),
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
        clue("Element químic del període 3 i grup 2 de la taula periòdica.", ["magnesi"]),
        clue("Element metàl·lic de símbol Zn.", ["zinc"])
    ],
    bank3: [
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
        clue("Capacitat de combinació d'un element en formar compostos.", ["valència", "valencia"]),
        clue("Unitat de potència elèctrica o mecànica.", ["watt"]),
        clue("Compost binari d'oxigen amb un altre element.", ["òxid", "oxid"]),
        clue("Element químic del període 3 i grup 1 de la taula periòdica.", ["sodi"]),
        clue("Element químic metàl·lic de símbol Zn.", ["zinc"])
    ],
    bank4: [
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
        clue("Element químic del període 3 i grup 14 de la taula periòdica.", ["silici"]),
        clue("Nom general de certes lleis clàssiques de la química.", ["ponderals"]),
        clue("Ciència que estudia la matèria i els seus canvis.", ["química", "quimica"]),
        clue("Científic que va descriure un model nuclear de l'àtom.", ["rutherford"]),
        clue("Element químic no metàl·lic de símbol S.", ["sulfur", "sofre"]),
        clue("Cognom del descobridor de l'electró.", ["thomson"]),
        clue("Compost binari de l'oxigen amb un altre element.", ["òxid", "oxid"]),
        clue("Magnitud que relaciona espai recorregut i temps.", ["velocitat"]),
        clue("Unitat de potència del Sistema Internacional.", ["watt"]),
        clue("Element químic del període 3 i grup 15 de la taula periòdica.", ["fòsfor", "fosfor"]),
        clue("Element químic del període 3 i grup 16 de la taula periòdica.", ["sofre", "sulfur"]),
        clue("Element químic de símbol Zn.", ["zinc"])
    ]
};

const ROUND_ASSIGNMENTS = {
    qualifying: { A: BANKS.bank1, B: BANKS.bank2 },
    semifinalA: { A: BANKS.bank3, B: BANKS.bank4 },
    semifinalB: { A: BANKS.bank2, B: BANKS.bank1 },
    final: { A: BANKS.bank4, B: BANKS.bank3 }
};

const roundSelect = document.getElementById("roundSelect");
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");
const teamANameInput = document.getElementById("teamAName");
const teamBNameInput = document.getElementById("teamBName");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const roundTitle = document.getElementById("roundTitle");
const currentTurn = document.getElementById("currentTurn");
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
const roscoA = document.getElementById("roscoA");
const roscoB = document.getElementById("roscoB");
const teamATitle = document.getElementById("teamATitle");
const teamBTitle = document.getElementById("teamBTitle");
const roscoATitle = document.getElementById("roscoATitle");
const roscoBTitle = document.getElementById("roscoBTitle");
const teamAInfo = document.getElementById("teamAInfo");
const teamBInfo = document.getElementById("teamBInfo");
const teamACorrect = document.getElementById("teamACorrect");
const teamAIncorrect = document.getElementById("teamAIncorrect");
const teamAPending = document.getElementById("teamAPending");
const teamATimer = document.getElementById("teamATimer");
const teamBCorrect = document.getElementById("teamBCorrect");
const teamBIncorrect = document.getElementById("teamBIncorrect");
const teamBPending = document.getElementById("teamBPending");
const teamBTimer = document.getElementById("teamBTimer");
const scoreAValue = document.getElementById("scoreAValue");
const scoreBValue = document.getElementById("scoreBValue");
const activeRoscoValue = document.getElementById("activeRoscoValue");

let teams = {};
let activeTeamId = "A";
let timerInterval = null;
let gameRunning = false;

function normalize(text) {
    return text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[·.,;:!?'"()]/g, "")
        .replace(/\s+/g, " ");
}

function formatTime(totalSeconds) {
    const safeSeconds = Math.max(0, totalSeconds);
    const minutes = Math.floor(safeSeconds / 60);
    const seconds = safeSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function readSelectedTime() {
    const minutes = Number.parseInt(minutesInput.value, 10) || 0;
    const seconds = Number.parseInt(secondsInput.value, 10) || 0;
    return Math.max(30, (minutes * 60) + Math.min(Math.max(seconds, 0), 59));
}

function createTeamState(id, name, questions, roscoEl, refs, totalSeconds) {
    return {
        id,
        name,
        questions,
        roscoEl,
        refs,
        statuses: LETTERS.map(() => "pending"),
        queue: LETTERS.map((_, index) => index),
        currentIndex: 0,
        correct: 0,
        incorrect: 0,
        pending: LETTERS.length,
        score: 0,
        timeLeft: totalSeconds
    };
}

function buildRosco(teamId) {
    const roscoEl = teams[teamId].roscoEl;
    roscoEl.innerHTML = "";
    const radius = 43;

    LETTERS.forEach((letter, index) => {
        const angle = ((index / LETTERS.length) * Math.PI * 2) - (Math.PI / 2);
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        const letterEl = document.createElement("div");
        letterEl.className = "letter pending";
        letterEl.id = `letter-${teamId}-${index}`;
        letterEl.textContent = letter;
        letterEl.style.left = `calc(${x}% - 6.5%)`;
        letterEl.style.top = `calc(${y}% - 6.5%)`;
        roscoEl.appendChild(letterEl);
    });
}

function updateRosco(teamId) {
    const team = teams[teamId];
    team.roscoEl.querySelectorAll(".letter").forEach((letterEl, index) => {
        letterEl.className = "letter";
        letterEl.classList.add(team.statuses[index]);
        if (gameRunning && teamId === activeTeamId && index === team.currentIndex) {
            letterEl.classList.add("current");
        }
    });
}

function updatePanels() {
    const teamA = teams.A;
    const teamB = teams.B;

    teamATitle.textContent = teamA.name;
    teamBTitle.textContent = teamB.name;
    roscoATitle.textContent = `Rosco de ${teamA.name}`;
    roscoBTitle.textContent = `Rosco de ${teamB.name}`;

    teamACorrect.textContent = String(teamA.correct);
    teamAIncorrect.textContent = String(teamA.incorrect);
    teamAPending.textContent = String(teamA.pending);
    teamATimer.textContent = formatTime(teamA.timeLeft);

    teamBCorrect.textContent = String(teamB.correct);
    teamBIncorrect.textContent = String(teamB.incorrect);
    teamBPending.textContent = String(teamB.pending);
    teamBTimer.textContent = formatTime(teamB.timeLeft);

    scoreAValue.textContent = String(teamA.score);
    scoreBValue.textContent = String(teamB.score);
    activeRoscoValue.textContent = activeTeamId;

    teamAInfo.classList.toggle("active", gameRunning && activeTeamId === "A");
    teamBInfo.classList.toggle("active", gameRunning && activeTeamId === "B");
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

function isTeamFinished(teamId) {
    return teams[teamId].pending <= 0 || teams[teamId].queue.length === 0;
}

function updateQuestionCard() {
    if (!gameRunning) {
        return;
    }

    const team = teams[activeTeamId];
    const index = team.currentIndex;

    if (index === -1 || typeof team.questions[index] === "undefined") {
        finishGame();
        return;
    }

    currentTurn.textContent = `Torn de ${team.name}`;
    currentLetter.textContent = LETTERS[index];
    questionIndex.textContent = `Rosco ${activeTeamId} · ${LETTERS[index]}`;
    questionText.textContent = team.questions[index].text;
    answerInput.value = "";
    answerInput.focus();
    updateRosco("A");
    updateRosco("B");
    updatePanels();
}

function stopTimer() {
    if (timerInterval) {
        window.clearInterval(timerInterval);
        timerInterval = null;
    }
}

function startTimer() {
    stopTimer();
    timerInterval = window.setInterval(() => {
        if (!gameRunning) {
            return;
        }

        const team = teams[activeTeamId];
        team.timeLeft -= 1;
        if (team.timeLeft < 0) {
            team.timeLeft = 0;
        }

        updatePanels();

        if (team.timeLeft === 0) {
            setFeedback("error", `${team.name} s'ha quedat sense temps.`);
            team.currentIndex = findNextPlayableIndex(activeTeamId);
            if (allTeamsFinished()) {
                finishGame();
                return;
            }
            switchTurn(true);
        }
    }, 1000);
}

function findNextPlayableIndex(teamId) {
    const team = teams[teamId];
    while (team.queue.length > 0) {
        const nextIndex = team.queue[0];
        if (team.statuses[nextIndex] === "pending" || team.statuses[nextIndex] === "passed") {
            return nextIndex;
        }
        team.queue.shift();
    }
    return -1;
}

function allTeamsFinished() {
    return isTeamFinished("A") && isTeamFinished("B");
}

function ensureCurrentIndex(teamId) {
    const team = teams[teamId];
    team.currentIndex = findNextPlayableIndex(teamId);
}

function switchTurn(forceOtherTeam = false) {
    if (!gameRunning) {
        return;
    }

    stopTimer();
    ensureCurrentIndex("A");
    ensureCurrentIndex("B");

    if (allTeamsFinished()) {
        finishGame();
        return;
    }

    let nextTeamId = activeTeamId;
    if (forceOtherTeam) {
        nextTeamId = activeTeamId === "A" ? "B" : "A";
    }

    if (isTeamFinished(nextTeamId) || teams[nextTeamId].timeLeft <= 0) {
        nextTeamId = nextTeamId === "A" ? "B" : "A";
    }

    if (isTeamFinished(nextTeamId) || teams[nextTeamId].timeLeft <= 0) {
        finishGame();
        return;
    }

    activeTeamId = nextTeamId;
    updateQuestionCard();
    startTimer();
}

function removeCurrentFromQueue(teamId) {
    const team = teams[teamId];
    const currentIndex = team.currentIndex;
    const position = team.queue.indexOf(currentIndex);
    if (position !== -1) {
        team.queue.splice(position, 1);
    }
}

function applyResult(result) {
    if (!gameRunning) {
        return;
    }

    const team = teams[activeTeamId];
    const index = team.currentIndex;
    if (index === -1) {
        return;
    }

    removeCurrentFromQueue(activeTeamId);

    if (team.statuses[index] === "pending" || team.statuses[index] === "passed") {
        team.pending -= 1;
    }

    if (result === "correct") {
        team.statuses[index] = "correct";
        team.correct += 1;
        team.score += 1;
        setFeedback("success", `${team.name} ha respost correctament.`);
    } else {
        team.statuses[index] = "incorrect";
        team.incorrect += 1;
        setFeedback("error", `${team.name} ha fallat. Solució: ${team.questions[index].answers[0]}.`);
    }

    ensureCurrentIndex(activeTeamId);
    updateRosco(activeTeamId);
    updatePanels();

    if (allTeamsFinished()) {
        finishGame();
        return;
    }

    switchTurn(true);
}

function checkAnswer() {
    if (!gameRunning) {
        return;
    }

    const team = teams[activeTeamId];
    const userAnswer = normalize(answerInput.value);
    const validAnswers = team.questions[team.currentIndex].answers.map(normalize);

    if (!userAnswer) {
        setFeedback("info", "Escriu una resposta o utilitza la correcció manual.");
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
    if (!gameRunning) {
        return;
    }

    const team = teams[activeTeamId];
    const index = team.currentIndex;
    if (index === -1) {
        return;
    }

    removeCurrentFromQueue(activeTeamId);
    if (team.statuses[index] === "pending") {
        team.statuses[index] = "passed";
    }
    team.queue.push(index);
    ensureCurrentIndex(activeTeamId);
    updateRosco(activeTeamId);
    updatePanels();
    setFeedback("info", `${team.name} ha fet passaparaula.`);
    switchTurn(true);
}

function finishGame() {
    gameRunning = false;
    stopTimer();
    setControls(false);
    updateRosco("A");
    updateRosco("B");
    updatePanels();

    const teamA = teams.A;
    const teamB = teams.B;
    let message = "Partida acabada.";

    if (teamA.score > teamB.score) {
        message = `Partida acabada. Guanya ${teamA.name}.`;
    } else if (teamB.score > teamA.score) {
        message = `Partida acabada. Guanya ${teamB.name}.`;
    } else {
        message = "Partida acabada. Hi ha empat.";
    }

    currentTurn.textContent = message;
    currentLetter.textContent = "-";
    questionIndex.textContent = `A ${teamA.score} · B ${teamB.score}`;
    questionText.textContent = "No queden més preguntes disponibles per als equips.";
}

function initializeTeams() {
    const roundKey = roundSelect.value;
    const totalSeconds = readSelectedTime();
    const teamAName = teamANameInput.value.trim() || "Equip A";
    const teamBName = teamBNameInput.value.trim() || "Equip B";
    const assignment = ROUND_ASSIGNMENTS[roundKey];

    teams = {
        A: createTeamState("A", teamAName, assignment.A, roscoA, {}, totalSeconds),
        B: createTeamState("B", teamBName, assignment.B, roscoB, {}, totalSeconds)
    };
}

function startGame() {
    initializeTeams();
    buildRosco("A");
    buildRosco("B");
    activeTeamId = "A";
    gameRunning = true;
    roundTitle.textContent = ROUND_LABELS[roundSelect.value];
    setControls(true);
    setFeedback("info", "Partida iniciada.");
    updatePanels();
    updateQuestionCard();
    startTimer();
}

function resetGame() {
    stopTimer();
    gameRunning = false;
    initializeTeams();
    buildRosco("A");
    buildRosco("B");
    roundTitle.textContent = ROUND_LABELS[roundSelect.value];
    currentTurn.textContent = "Prem “Començar partida” per iniciar el joc.";
    currentLetter.textContent = "A";
    questionIndex.textContent = "Torn inicial";
    questionText.textContent = "La pista de la lletra activa apareixerà aquí.";
    answerInput.value = "";
    setControls(false);
    setFeedback("", "Sense resposta registrada encara.");
    updatePanels();
    updateRosco("A");
    updateRosco("B");
}

roundSelect.addEventListener("change", resetGame);
minutesInput.addEventListener("input", resetGame);
secondsInput.addEventListener("input", resetGame);
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

resetGame();
