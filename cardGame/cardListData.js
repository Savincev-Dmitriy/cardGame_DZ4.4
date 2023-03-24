// const shuffledCardList = [
//     {
//         id: 1,
//         name: "ace-of-clubs",
//         img: "images/ace-of-clubs.png",
//     },
//     {
//         id: 2,
//         name: "king-of-clubs",
//         img: "images/king-of-clubs.png",
//     },
//     {
//         id: 3,
//         name: "lady-of-clubs",
//         img: "images/lady-of-clubs.png",
//     },
//     {
//         id: 4,
//         name: "jack-of-clubs",
//         img: "images/jack-of-clubs.png",
//     },
//     {
//         id: 5,
//         name: "ten-of-clubs",
//         img: "images/ten-of-clubs.png",
//     },
//     {
//         id: 6,
//         name: "nine-of-clubs",
//         img: "images/nine-of-clubs.png",
//     },
//     {
//         id: 7,
//         name: "eight-of-clubs",
//         img: "images/eight-of-clubs.png",
//     },
//     {
//         id: 8,
//         name: "seven-of-clubs",
//         img: "images/seven-of-clubs.png",
//     },
//     {
//         id: 9,
//         name: "six-of-clubs",
//         img: "images/six-of-clubs.png",
//     },
//     {
//         id: 10,
//         name: "ace-of-diamonds",
//         img: "images/ace-of-diamonds.png",
//     },
//     {
//         id: 11,
//         name: "king-of-diamonds",
//         img: "images/king-of-diamonds.png",
//     },
//     {
//         id: 12,
//         name: "lady-of-diamonds",
//         img: "images/lady-of-diamonds.png",
//     },
//     {
//         id: 13,
//         name: "jack-of-diamonds",
//         img: "images/jack-of-diamonds.png",
//     },
//     {
//         id: 14,
//         name: "ten-of-diamonds",
//         img: "images/ten-of-diamonds.png",
//     },
//     {
//         id: 15,
//         name: "nine-of-diamonds",
//         img: "images/nine-of-diamonds.png",
//     },
//     {
//         id: 16,
//         name: "eight-of-diamonds",
//         img: "images/eight-of-diamonds.png",
//     },
//     {
//         id: 17,
//         name: "seven-of-diamonds",
//         img: "images/seven-of-diamonds.png",
//     },
//     {
//         id: 18,
//         name: "six-of-diamonds",
//         img: "images/six-of-diamonds.png",
//     },
//     {
//         id: 19,
//         name: "ace-of-hearts",
//         img: "images/ace-of-hearts.png",
//     },
//     {
//         id: 20,
//         name: "king-of-hearts",
//         img: "images/king-of-hearts.png",
//     },
//     {
//         id: 21,
//         name: "lady-of-hearts",
//         img: "images/lady-of-hearts.png",
//     },
//     {
//         id: 22,
//         name: "jack-of-hearts",
//         img: "images/jack-of-hearts.png",
//     },
//     {
//         id: 23,
//         name: "ten-of-hearts",
//         img: "images/ten-of-hearts.png",
//     },
//     {
//         id: 24,
//         name: "nine-of-hearts",
//         img: "images/nine-of-hearts.png",
//     },
//     {
//         id: 25,
//         name: "eight-of-hearts",
//         img: "images/eight-of-hearts.png",
//     },
//     {
//         id: 26,
//         name: "seven-of-hearts",
//         img: "images/seven-of-hearts.png",
//     },
//     {
//         id: 27,
//         name: "six-of-hearts",
//         img: "images/six-of-hearts.png",
//     },
//     {
//         id: 28,
//         name: "ace-of-spades",
//         img: "images/ace-of-spades.png",
//     },
//     {
//         id: 29,
//         name: "king-of-spades",
//         img: "images/king-of-spades.png",
//     },
//     {
//         id: 30,
//         name: "lady-of-spades",
//         img: "images/lady-of-spades.png",
//     },
//     {
//         id: 31,
//         name: "jack-of-spades",
//         img: "images/jack-of-spades.png",
//     },
//     {
//         id: 32,
//         name: "ten-of-spades",
//         img: "images/ten-of-spades.png",
//     },
//     {
//         id: 33,
//         name: "nine-of-spades",
//         img: "images/nine-of-spades.png",
//     },
//     {
//         id: 34,
//         name: "eight-of-spades",
//         img: "images/eight-of-spades.png",
//     },
//     {
//         id: 35,
//         name: "seven-of-spades",
//         img: "images/seven-of-spades.png",
//     },
//     {
//         id: 36,
//         name: "six-of-spades",
//         img: "images/six-of-spades.png",
//     },
// ];
// let cardData = [];

// function generateRandomCards() {
//     let cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
//     for (let i = 0; i < 3; i++) {
//         cardData.push(cardListRandom[i]);
//     }
//     cardData = cardData.concat(cardData);
// }

// function createCard() {
//     const card = document.createElement("div");
//     card.classList.add("CARD");

//     const cardFront = document.createElement("div");
//     cardFront.classList.add("card-face", "card-face-front");

//     const cardBack = document.createElement("div");
//     cardBack.classList.add("card-face", "card-face-back");

//     card.addEventListener("click", function () {
//         card.classList.toggle("is-flipped");
//     });
// }

// function renderCards() {
//     cardData.forEach((cardEl) => {
//         createCard();
//     });
// }

// if ((window.application.challenge = "easy")) {
// }

// const shuffle = (cards) => {
//     let m = cards.length,
//         t,
//         i;

//     // Пока есть элементы для перемешивания
//     while (m) {
//         // Взять оставшийся элемент
//         i = Math.floor(Math.random() * m--);

//         // И поменять его местами с текущим элементом
//         t = cards[m];
//         cards[m] = cards[i];
//         cards[i] = t;
//     }

//     return cards;
// };
// // data.map(user => user.name).join(', ')
