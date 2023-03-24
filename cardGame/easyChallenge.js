/* eslint-disable eqeqeq */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// import "./style.css";

function generatingEasyCards(container) {
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");

    const scene = document.createElement("div");
    scene.classList.add("scene");

    let cardData = [];

    function generateRandomCards() {
        let cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
        for (let i = 0; i < 3; i++) {
            cardData.push(cardListRandom[i]);
        }
        cardData = cardData.concat(cardData);
    }

    function createCard(cardData) {
        const card = document.createElement("div");
        card.classList.add("CARD");

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-face", "card-face-front");
        card.append(cardFront);

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-face", "card-face-back");
        cardBack.style.backgroundImage = `url("${cardData.img}")`;
        card.append(cardBack);

        card.addEventListener("click", function () {
            if (
                window.application.timerPlaying == [] ||
                window.application.timerPlaying == ""
            ) {
                alert("Запусти таймер, чтобы начать играть!");
            } else {
                card.classList.toggle("is-flipped");
                card.setAttribute("id", `${cardData.id}`);
                window.application.pickedCards.push(card.getAttribute("id"));

                if (
                    window.application.pickedCards[0] ===
                    window.application.pickedCards[1]
                ) {
                    alert("Вы выиграли!");
                }

                if (window.application.pickedCards.length === 2) {
                    if (
                        window.application.pickedCards[0] !==
                        window.application.pickedCards[1]
                    ) {
                        alert("Вы проиграли!");
                    }
                }

                if (window.application.pickedCards.length > 6) {
                    window.application.pickedCards = [];
                    alert("Начни игру заново, ты проиграл!");
                }
            }
        });

        return card;
    }

    function renderCards() {
        cardData.forEach((cardEl) => {
            const card = createCard(cardEl);
            scene.append(card);
        });
    }
    generateRandomCards();
    renderCards();

    scene.querySelectorAll(".CARD").forEach((card) => {
        console.log(card);
        card.classList.add("is-flipped");
        setTimeout(() => {
            card.classList.remove("is-flipped");
        }, 5000);
    });

    /* const CARD = document.createElement("div");
    CARD.classList.add("CARD");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-face", "card-face-front");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-face", "card-face-back");

    CARD.addEventListener("click", function () {
        CARD.classList.toggle("is-flipped");
    });

    const CARDTWO = document.createElement("div");
    CARDTWO.classList.add("CARD");

    const CARDTWOFRONT = document.createElement("div");
    CARDTWOFRONT.classList.add("card-face", "card-face-front");

    const CARDTWOBACK = document.createElement("div");
    CARDTWOBACK.classList.add("card-face", "card-face-back");

    CARDTWO.addEventListener("click", function () {
        CARDTWO.classList.toggle("is-flipped");
    });

    const CARDTHREE = document.createElement("div");
    CARDTHREE.classList.add("CARD");

    const CARDTHREEFRONT = document.createElement("div");
    CARDTHREEFRONT.classList.add("card-face", "card-face-front");

    const CARDTHREEBACK = document.createElement("div");
    CARDTHREEBACK.classList.add("card-face", "card-face-back");

    CARDTHREE.addEventListener("click", function () {
        CARDTHREE.classList.toggle("is-flipped");
    });

    const CARDFOUR = document.createElement("div");
    CARDFOUR.classList.add("CARD");

    const CARDFOURFRONT = document.createElement("div");
    CARDFOURFRONT.classList.add("card-face", "card-face-front");

    const CARDFOURBACK = document.createElement("div");
    CARDFOURBACK.classList.add("card-face", "card-face-back");

    CARDFOUR.addEventListener("click", function () {
        CARDFOUR.classList.toggle("is-flipped");
    });

    const CARDFIVE = document.createElement("div");
    CARDFIVE.classList.add("CARD");

    const CARDFIVEFRONT = document.createElement("div");
    CARDFIVEFRONT.classList.add("card-face", "card-face-front");

    const CARDFIVEBACK = document.createElement("div");
    CARDFIVEBACK.classList.add("card-face", "card-face-back");

    CARDFIVE.addEventListener("click", function () {
        CARDFIVE.classList.toggle("is-flipped");
    });

    const CARDSIX = document.createElement("div");
    CARDSIX.classList.add("CARD");

    const CARDSIXFRONT = document.createElement("div");
    CARDSIXFRONT.classList.add("card-face", "card-face-front");

    const CARDSIXBACK = document.createElement("div");
    CARDSIXBACK.classList.add("card-face", "card-face-back");

    CARDSIX.addEventListener("click", function () {
        CARDSIX.classList.toggle("is-flipped");
    }); */

    container.appendChild(battleField);
    battleField.appendChild(scene);
    /* scene.appendChild(CARD); */
    /* scene.appendChild(CARDTWO);
    scene.appendChild(CARDTHREE);
    scene.appendChild(CARDFOUR);
    scene.appendChild(CARDFIVE);
    scene.appendChild(CARDSIX);
    CARD.appendChild(cardFront);
    CARD.appendChild(cardBack);
    CARDTWO.appendChild(CARDTWOFRONT);
    CARDTWO.appendChild(CARDTWOBACK);
    CARDTHREE.appendChild(CARDTHREEFRONT);
    CARDTHREE.appendChild(CARDTHREEBACK);
    CARDFOUR.appendChild(CARDFOURFRONT);
    CARDFOUR.appendChild(CARDFOURBACK);
    CARDFIVE.appendChild(CARDFIVEFRONT);
    CARDFIVE.appendChild(CARDFIVEBACK);
    CARDSIX.appendChild(CARDSIXFRONT);
    CARDSIX.appendChild(CARDSIXBACK); */

    // let randomCards = generateRandomCards();

    //     randomCards

    //     randomCards.forEach(element => {
    //         element.map((user) => user.name).join(", ");
    //         console.log(element);
    //     });
}

window.application.blocks["generateEasyCards"] = generatingEasyCards;

function renderScreenEasyChallenge() {
    container.textContent = " ";

    const header = document.createElement("div");
    header.classList.add("header");

    const buttonTime = document.createElement("button");
    buttonTime.classList.add("btn", "timer-button");
    buttonTime.textContent = "старт/сбросить";

    let secs,
        now,
        timer,
        mins = 0;

    const timerField = document.createElement("span");
    timerField.classList.add("timer-field");
    timerField.textContent = "0:00";

    function time() {
        secs = Math.floor((Date.now() - now) / 1000);
        if (secs === 60) {
            now = Date.now();
            mins++;
        }
        if (secs < 10) {
            secs = "0" + secs;
        }
        timerField.innerHTML = mins + ":" + secs;
    }

    buttonTime.onclick = function () {
        now = Date.now();
        mins = 0;
        timer = setInterval(time);
        window.application.timerPlaying = setInterval(time);
    };

    const tryAgainButton = document.createElement("button");
    tryAgainButton.classList.add("btn", "try-again-button");
    tryAgainButton.textContent = "Начать заново";

    tryAgainButton.addEventListener("click", () => {
        window.application.challenge = "";
        window.application.renderScreen("start");
        window.application.pickedCards = [];
        window.application.timerPlaying = [];
    });

    container.appendChild(header);
    header.appendChild(buttonTime);
    header.appendChild(timerField);
    header.appendChild(tryAgainButton);

    window.application.renderBlock("generateEasyCards", container);
}

window.application.screens["easy"] = renderScreenEasyChallenge;
