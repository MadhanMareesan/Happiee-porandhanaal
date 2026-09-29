const dailyMessages = [

    {
        date: "SEP 20",
        number: "CARD 01",
        message:
            "என் வாழ்க்கையை அழகாக்க வந்த அழகான தேவதை நீ ❤️"
    },

    {
        date: "SEP 21",
        number: "CARD 02",
        message:
            "உன்னை நினைக்கும் ஒவ்வொரு முறையும் என் உதடுகளில் தானாகவே புன்னகை மலர்கிறது ❤️✨"
    },

    {
        date: "SEP 22",
        number: "CARD 03",
        message:
            "ஒவ்வொரு சூரிய அஸ்தமனத்திலும், சூரிய உதயத்திலும், குளிர்ந்த காற்றிலும், வெப்பமான நாளிலும், தூறலிலும், காற்றின் வருடலிலும் — உன் கைகளைப் பிடித்தபடி, வாழ்வின் ஒவ்வொரு தருணத்தையும் உன்னுடன் ரசிக்கக் காத்திருக்கிறேன். ❤️✨"
    },

    {
        date: "SEP 23",
        number: "CARD 04",
        message:
            "You’re my first thought in the morning, my last thought at night, and the thought that stays with me all day. ❤️✨"
    },

    {
        date: "SEP 24",
        number: "CARD 05",
        message:
            "நீ என் வாழ்க்கைக்கு கிடைத்த மிகப்பெரிய பரிசு. ❤️ உனக்கு என்னையே தருவதைவிட சிறந்த பரிசு வேறென்ன இருக்க முடியும்? நேற்றும், இன்றும், என்றும் — நான் முழுவதுமாக உன்னுடையவன். இது சத்தியம். ❤️"
    },

    {
        date: "SEP 25",
        number: "CARD 06",
        message:
            "If life were a dictionary, and love were the word I searched for, it would simply say — Sweatha. ❤️"
    },

    {
        date: "SEP 26",
        number: "CARD 07",
        message:
            "உன்னை காதலிக்கும் வரை, ஒருவரை இவ்வளவு அதிகமாக என்னால் நேசிக்க முடியும் என்று நான் ஒருபோதும் அறிந்ததில்லை. ❤️"
    },

    {
        date: "SEP 27",
        number: "CARD 08",
        message:
            "Three more days until the world gets another reason to celebrate. ❤️"
    },

    {
        date: "SEP 28",
        number: "CARD 09",
        message:
            "Relative → Buddy → Friend → Best Friend → Lover → Fiancée ❤️ உனக்குத் தெரிந்த ஒரு உறவாகத் தொடங்கி, இன்று உன்னை வாழ்நாள் முழுவதும் நேசிக்கும் உன் துணையாக மாறியிருக்கிறேன். Thanks for the hike every year, my Boss Lady. 😌❤️👑"
    },

    {
        date: "SEP 29",
        number: "CARD 10",
        message:
            "Tomorrow may be your special day. But you are special to me everyday. Thank you for being you. Saying en aalu, my Swea is the biggest flex of my life. ❤️"
    }

];


/* =========================================
   STATE
========================================= */

let currentCard = 0;
let cardIsOpen = false;
let movingToNext = false;


/* =========================================
   ELEMENTS
========================================= */

const stage =
    document.getElementById("card-stage");

const progressText =
    document.getElementById("progress-text");

const progressDots =
    document.getElementById("progress-dots");

const instruction =
    document.getElementById("instruction");

const birthdayArea =
    document.getElementById("birthday-area");

const grandCard =
    document.getElementById("grand-card");


/* =========================================
   CREATE PROGRESS DOTS
========================================= */

function createProgressDots() {

    dailyMessages.forEach((_, index) => {

        const dot =
            document.createElement("div");

        dot.className = "progress-dot";

        if (index === 0) {
            dot.classList.add("active");
        }

        progressDots.appendChild(dot);
    });
}


/* =========================================
   UPDATE PROGRESS
========================================= */

function updateProgress() {

    progressText.innerText =
        `CARD ${currentCard + 1} OF 10`;

    const dots =
        document.querySelectorAll(
            ".progress-dot"
        );

    dots.forEach((dot, index) => {

        dot.classList.remove(
            "active",
            "done"
        );

        if (index < currentCard) {
            dot.classList.add("done");
        }

        if (index === currentCard) {
            dot.classList.add("active");
        }
    });
}


/* =========================================
   CREATE CARD
========================================= */

function createCard(index) {

    const item =
        dailyMessages[index];

    const card =
        document.createElement("div");

    card.className =
        "daily-card active pop";

    card.innerHTML = `

        <div class="daily-inner">

            <div class="daily-front">

                <div class="small-crown">
                    👑
                </div>

                <div class="card-number">
                    ${item.number}
                </div>

                <div class="card-date">
                    ${item.date}
                </div>

                <div class="card-tap">
                    TAP TO OPEN ❤️
                </div>

            </div>


            <div class="daily-back">

                <div class="message-crown">
                    ❤️
                </div>

                <div class="card-number">
                    ${item.number}
                </div>

                <p>
                    ${item.message}
                </p>

            </div>

        </div>
    `;


    card.addEventListener(
        "click",
        handleDailyCardClick
    );


    stage.appendChild(card);

    return card;
}


/* =========================================
   SHOW FIRST CARD
========================================= */

function showFirstCard() {

    createCard(0);

    updateProgress();

    instruction.innerText =
        "TAP TO OPEN ❤️";
}


/* =========================================
   DAILY CARD CLICK
========================================= */

function handleDailyCardClick(event) {

    const card =
        event.currentTarget;

    if (movingToNext) {
        return;
    }


    /* OPEN */

    if (!cardIsOpen) {

        cardIsOpen = true;

        card.classList.add("open");

        instruction.innerText =
            "❤️";

        return;
    }


    /* MOVE TO NEXT */

    movingToNext = true;

    card.classList.remove("pop");

    card.classList.add(
        "background-card"
    );

    instruction.innerText =
        "❤️";

    /* LAST CARD */

    if (currentCard === 9) {

        setTimeout(() => {

            card.remove();

            showMagicalBirthday();

        }, 800);

        return;
    }


    /* NEXT CARD */

    currentCard++;

    setTimeout(() => {

        card.remove();

        cardIsOpen = false;

        movingToNext = false;

        createCard(currentCard);

        updateProgress();

        instruction.innerText =
            "TAP TO OPEN ❤️";

    }, 650);
}


/* =========================================
   MAGICAL BIRTHDAY REVEAL
========================================= */

function showMagicalBirthday() {

    progressText.innerText =
        "THE FINAL SURPRISE ❤️";

    progressDots.style.opacity =
        "0";

    instruction.innerText =
        "";

    setTimeout(() => {

        birthdayArea.classList.add(
            "show"
        );

        createMagicParticles();

    }, 350);
}


/* =========================================
   GRAND CARD CLICK
========================================= */

grandCard.addEventListener(
    "click",
    () => {

        if (
            !birthdayArea.classList.contains(
                "show"
            )
        ) {
            return;
        }

        grandCard.classList.toggle(
            "open"
        );

        if (
            grandCard.classList.contains(
                "open"
            )
        ) {

            createGrandCelebration();

        }

    }
);


/* =========================================
   MAGIC PARTICLES
========================================= */

function createMagicParticles() {

    const symbols = [
        "✨",
        "💕",
        "❤️",
        "🌸",
        "👑"
    ];

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createFloating(
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ]
            );

        }, i * 70);
    }
}


/* =========================================
   GRAND CELEBRATION
========================================= */

function createGrandCelebration() {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨",
        "🌸",
        "🌹",
        "👑",
        "🎂"
    ];

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            createFloating(
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ]
            );

        }, i * 55);
    }
}


/* =========================================
   FLOATING ELEMENT
========================================= */

function createFloating(symbol) {

    const element =
        document.createElement("div");

    element.className =
        "floating";

    element.innerText =
        symbol;

    element.style.left =
        Math.random() * 100 + "vw";

    element.style.fontSize =
        (
            12 +
            Math.random() * 18
        ) + "px";

    const duration =
        4 +
        Math.random() * 5;

    element.style.animationDuration =
        duration + "s";

    document
        .getElementById(
            "floating-elements"
        )
        .appendChild(element);

    setTimeout(() => {

        element.remove();

    }, duration * 1000);
}


/* =========================================
   BACKGROUND HEARTS
========================================= */

function createBackgroundHeart() {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "✨",
        "🌸",
        "🌷"
    ];

    createFloating(
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ]
    );
}


for (let i = 0; i < 8; i++) {

    setTimeout(
        createBackgroundHeart,
        i * 500
    );
}


setInterval(
    createBackgroundHeart,
    1300
);


/* =========================================
   START
========================================= */

createProgressDots();

showFirstCard();