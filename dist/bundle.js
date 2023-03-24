/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cardGame/easyChallenge.js":
/*!***********************************!*\
  !*** ./cardGame/easyChallenge.js ***!
  \***********************************/
/***/ (() => {

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


/***/ }),

/***/ "./cardGame/hardChallenge.js":
/*!***********************************!*\
  !*** ./cardGame/hardChallenge.js ***!
  \***********************************/
/***/ (() => {

/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function generatingHardCards(container) {
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");

    const scene = document.createElement("div");
    scene.classList.add("scene");

    let cardData = [];

    function generateRandomCards() {
        let cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
        for (let i = 0; i < 9; i++) {
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

                if (window.application.pickedCards.length > 18) {
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

    container.appendChild(battleField);
    battleField.appendChild(scene);
}

window.application.blocks["generateHardCards"] = generatingHardCards;

function renderScreenHardChallenge() {
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

    window.application.renderBlock("generateHardCards", container);
}

window.application.screens["hard"] = renderScreenHardChallenge;


/***/ }),

/***/ "./cardGame/mediumChallenge.js":
/*!*************************************!*\
  !*** ./cardGame/mediumChallenge.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./cardGame/style.css");
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */



function generatingMediumCards(container) {
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");

    const scene = document.createElement("div");
    scene.classList.add("scene");

    let cardData = [];

    function generateRandomCards() {
        let cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
        for (let i = 0; i < 6; i++) {
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

                if (window.application.pickedCards.length > 12) {
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

    container.appendChild(battleField);
    battleField.appendChild(scene);
}

window.application.blocks["generateMediumCards"] = generatingMediumCards;

function renderScreenMediumChallenge() {
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

    window.application.renderBlock("generateMediumCards", container);
}

window.application.screens["medium"] = renderScreenMediumChallenge;


/***/ }),

/***/ "./cardGame/style.css":
/*!****************************!*\
  !*** ./cardGame/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./cardGame/startPage.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./cardGame/style.css");
/* harmony import */ var _easyChallenge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easyChallenge.js */ "./cardGame/easyChallenge.js");
/* harmony import */ var _easyChallenge_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_easyChallenge_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mediumChallenge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediumChallenge.js */ "./cardGame/mediumChallenge.js");
/* harmony import */ var _hardChallenge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardChallenge.js */ "./cardGame/hardChallenge.js");
/* harmony import */ var _hardChallenge_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hardChallenge_js__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable no-undef */





function renderStartButton(container) {
    const startButton = document.createElement("button");

    startButton.textContent = "Старт";
    startButton.classList.add("start-button", "btn");

    startButton.addEventListener("click", () => {
        if (window.application.challenge === "") {
            alert("Выберите уровень сложности!");
        } else {
            if (window.application.challenge === "easy") {
                window.application.renderScreen("easy");
            } else if (window.application.challenge === "medium") {
                window.application.renderScreen("medium");
            } else if (window.application.challenge === "hard") {
                window.application.renderScreen("hard");
            } else {
                console.log(`Ошибка, обновите страницу!`);
            }
        }
    });

    container.appendChild(startButton);
}

window.application.blocks["StartButton"] = renderStartButton;

function renderStartScreen() {
    container.textContent = "";

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Выбери сложность";

    const pickerChalenge = document.createElement("div");
    pickerChalenge.classList.add("picker-challenge");

    const buttonFirst = document.createElement("button");
    buttonFirst.classList.add("button", "FirstChallenge");
    buttonFirst.textContent = "1";

    buttonFirst.addEventListener("click", () => {
        window.application.challenge = "easy";
        buttonFirst.classList.remove("button");
        buttonFirst.classList.add("selected");

        if (
            buttonSecond.classList.contains("selected") ||
            buttonThird.classList.contains("selected")
        ) {
            buttonSecond.classList.remove("selected");
            buttonThird.classList.remove("selected");
            buttonSecond.classList.add("button");
            buttonThird.classList.add("button");
        }
    });

    const buttonSecond = document.createElement("button");
    buttonSecond.classList.add("button", "SecondChallenge");
    buttonSecond.textContent = "2";

    buttonSecond.addEventListener("click", () => {
        window.application.challenge = "medium";
        buttonSecond.classList.remove("button");
        buttonSecond.classList.add("selected");

        if (
            buttonFirst.classList.contains("selected") ||
            buttonThird.classList.contains("selected")
        ) {
            buttonFirst.classList.remove("selected");
            buttonThird.classList.remove("selected");
            buttonFirst.classList.add("button");
            buttonThird.classList.add("button");
        }
    });

    const buttonThird = document.createElement("button");
    buttonThird.classList.add("button", "ThirdChallenge");
    buttonThird.textContent = "3";

    buttonThird.addEventListener("click", () => {
        window.application.challenge = "hard";
        buttonThird.classList.remove("button");
        buttonThird.classList.add("selected");

        if (
            buttonFirst.classList.contains("selected") ||
            buttonThird.classList.contains("selected")
        ) {
            buttonFirst.classList.remove("selected");
            buttonSecond.classList.remove("selected");
            buttonFirst.classList.add("button");
            buttonSecond.classList.add("button");
        }
    });

    container.appendChild(menu);
    menu.appendChild(title);
    menu.appendChild(pickerChalenge);
    pickerChalenge.appendChild(buttonFirst);
    pickerChalenge.appendChild(buttonSecond);
    pickerChalenge.appendChild(buttonThird);

    window.application.renderBlock("StartButton", menu);
}

window.application.screens["start"] = renderStartScreen;

window.application.renderScreen("start");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map