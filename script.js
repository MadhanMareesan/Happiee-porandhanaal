/* =========================================
   BIRTHDAY DATE
========================================= */

const birthday = new Date("September 30, 2026 00:00:00");


/* =========================================
   DAILY MESSAGES
========================================= */

const dailyMessages = {

    "2026-09-20": {
        card1: "என் வாழ்க்கையை அழகாக்க வந்த அழகான தேவதை நீ ❤️",
        card2: "You’re my favorite reason to have absolutely no innocent thoughts.🌶️"
    },

    "2026-09-21": {
        card1: “உன்னை நினைக்கும் ஒவ்வொரு முறையும், என் உதடுகளில் தானாகவே புன்னகை மலர்கிறது. ❤️✨”,
        card2: "Can’t wait to see you in your bday dress… the one you were born wearing. 🥵"
    },

    "2026-09-22": {
        card1: "Some memories become special simply because you were there. ❤️",
        card2: "If looking this good was illegal, you'd need a lawyer by now. 😏🖤"
    },

    "2026-09-23": {
        card1: "You make my ordinary days feel extraordinary. ✨❤️",
        card2: "I was going to behave today... then I remembered you exist. 🫦🌶️"
    },

    "2026-09-24": {
        card1: "I don't need a special day to celebrate you. ❤️",
        card2: "You're the reason my thoughts occasionally take a very naughty detour. 😏🖤"
    },

    "2026-09-25": {
        card1: "Five days... and I still have so many things left to say. ❤️",
        card2: "At this point, calling you distracting is an understatement. 🫦🌶️"
    },

    "2026-09-26": {
        card1: "I'm really grateful that our paths crossed. ❤️",
        card2: "Warning: thinking about you may cause uncontrollable smiling... and other thoughts. 😏🌶️"
    },

    "2026-09-27": {
        card1: "Three more days until the world gets another reason to celebrate. ❤️",
        card2: "You're sweet enough to melt my heart and spicy enough to mess with my head. 🖤🫦"
    },

    "2026-09-28": {
        card1: "I hope you know just how deeply you are loved. ❤️",
        card2: "Two days left... maybe I should start behaving. Nah. 😏🌶️"
    },

    "2026-09-29": {
        card1: "Tomorrow is your day. But honestly, I feel lucky every day because of you. ❤️",
        card2: "One more sleep, Kadhali... and then things get interesting. 🫦🌶️"
    }

};


/* =========================================
   GET TODAY'S DATE
========================================= */

function getTodayKey() {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


/* =========================================
   UPDATE COUNTDOWN
========================================= */

function updateCountdown() {

    const now = new Date();

    const difference = birthday - now;

    const daysElement =
        document.getElementById("days");

    const countdownText =
        document.querySelector(".countdown p");


    /* Birthday has arrived */

    if (difference <= 0) {

        daysElement.innerHTML = "🎂";

        countdownText.innerHTML =
            "HAPPY BIRTHDAY ❤️";

        return;
    }


    /* Calculate remaining days */

    const days = Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
    );


    daysElement.innerHTML = days;
}


/* Run immediately */

updateCountdown();


/* Update every minute */

setInterval(
    updateCountdown,
    60000
);


/* =========================================
   LOAD TODAY'S MESSAGES
========================================= */

function loadMessages() {

    const todayKey = getTodayKey();

    const todayMessages =
        dailyMessages[todayKey];


    if (todayMessages) {

        document.getElementById("message1")
            .innerText =
            todayMessages.card1;

        document.getElementById("message2")
            .innerText =
            todayMessages.card2;
    }
}


/* Load messages */

loadMessages();


/* =========================================
   CARD OPEN / CLOSE
========================================= */

function openCard(card) {

    card.classList.toggle("open");

    if (card.classList.contains("dirty-card")) {
        document.body.classList.toggle("dirty-mode");
    }

}


/* =========================================
   FLOATING HEARTS, FLOWERS & LOVE MESSAGE
========================================= */

const floatingSymbols = [

    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "🌸",
    "🌷",
    "🌺",
    "🌹",
    "✨",
    "Madhan loves you ❤️"

];
const dirtyFloatingSymbols = [
    "🍑",
    "🍒BOOBIES",
    "🫦",
    "BOOBIES",
    "🔥",
    "💋",
    "BOOBIES"
];

function createFloatingElement() {

    const element =
        document.createElement("div");


    element.classList.add(
        "floating"
    );


    /* Random heart / flower / message */

    const symbols = document.body.classList.contains("dirty-mode")
    ? dirtyFloatingSymbols
    : floatingSymbols;

element.innerText =
    symbols[
        Math.floor(
            Math.random() *
            symbols.length
        )
    ];


    /* Random horizontal position */

    element.style.left =
        Math.random() * 100 + "vw";


    /* Random size */

    element.style.fontSize =
        (14 + Math.random() * 20) + "px";


    /* Random falling speed */

    const duration =
        5 + Math.random() * 7;

    element.style.animationDuration =
        duration + "s";


    /* Add to page */

    document
        .getElementById("floating-elements")
        .appendChild(element);


    /* Remove after animation */

    setTimeout(() => {

        element.remove();

    }, duration * 1000);

}


/* =========================================
   CREATE FLOATING ELEMENTS
========================================= */


/* Initial elements */

for (let i = 0; i < 15; i++) {

    setTimeout(
        createFloatingElement,
        i * 300
    );

}


/* Continue creating them */

setInterval(
    createFloatingElement,
    500
);