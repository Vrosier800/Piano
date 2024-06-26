const doOne = new Audio("notes/do.wav");
const reOne = new Audio("notes/re.wav");
const mi = new Audio("notes/mi.wav");
const fa = new Audio("notes/fa.wav");
const sol = new Audio("notes/sol.wav");
const la = new Audio("notes/la.wav");
const si = new Audio("notes/si.wav");
const reTwo = new Audio("notes/re.wav");
const doTwo = new Audio("notes/doSharp.wav");

function playNote(audio, element) {
    console.log("Playing note:", audio.src); // Log the audio source
    audio.currentTime = 0; // Revenir au début du son (utile pour les sons rapides successifs)
    audio.play(); // Jouer le son
    element.classList.add("active"); // Add the active class for the hover effect
    setTimeout(() => {
        element.classList.remove("active"); // Remove the active class after 200ms
    }, 200);
}

const doPlay = document.querySelector(".do");
const reOnePlay = document.querySelector(".reOne"); // Utilisation de reOne pour la première note Ré
const miPlay = document.querySelector(".mi");
const faPlay = document.querySelector(".fa");
const solPlay = document.querySelector(".sol");
const laPlay = document.querySelector(".la");
const siPlay = document.querySelector(".si");
const reTwoPlay = document.querySelector(".reTwo"); // Utilisation de reTwo pour la deuxième note Ré
const doTwoPlay = document.querySelector(".doTwo");

doPlay.addEventListener("click", () => {
    playNote(doOne, doPlay);
});

reOnePlay.addEventListener("click", () => { // Utilisation de reOnePlay pour écouter la première note Ré
    playNote(reOne, reOnePlay);
});

miPlay.addEventListener("click", () => {
    playNote(mi, miPlay);
});

faPlay.addEventListener("click", () => {
    playNote(fa, faPlay);
});

solPlay.addEventListener("click", () => {
    playNote(sol, solPlay);
});

laPlay.addEventListener("click", () => {
    playNote(la, laPlay);
});

siPlay.addEventListener("click", () => {
    playNote(si, siPlay);
});

reTwoPlay.addEventListener("click", () => { // Utilisation de reTwoPlay pour écouter la deuxième note Ré
    playNote(reTwo, reTwoPlay);
});

doTwoPlay.addEventListener("click", () => {
    playNote(doTwo, doTwoPlay);
});

document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
    switch (event.key) {
        case "a":
            playNote(doOne, doPlay);
            break;
        case "z":
            playNote(reOne, reOnePlay); // Utilisation de reOnePlay pour écouter la première note Ré
            break;
        case "e":
            playNote(mi, miPlay);
            break;
        case "r":
            playNote(fa, faPlay);
            break;
        case "t":
            playNote(sol, solPlay);
            break;
        case "y":
            playNote(la, laPlay);
            break;
        case "u":
            playNote(si, siPlay);
            break;
        case "i":
            playNote(reTwo, reTwoPlay); // Utilisation de reTwoPlay pour écouter la deuxième note Ré
            break;
        case "o":
            playNote(doTwo, doTwoPlay);
            break;
    }
});
