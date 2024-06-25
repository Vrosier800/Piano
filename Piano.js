const doOne = new Audio("notes/do.wav");
const re = new Audio("notes/re.wav");
const mi = new Audio("notes/mi.wav");
const fa = new Audio("notes/fa.wav");
const sol = new Audio("notes/sol.wav");
const la = new Audio("notes/la.wav");
const si = new Audio("notes/si.wav");
const doTwo = new Audio("notes/do#.wav");

function playNote(audio) {
    audio.currentTime = 0; // Revenir au début du son (utile pour les sons rapides successifs)
    audio.play(); // Jouer le son
  }

const doPlay = document.querySelector(".do")
const rePlay = document.querySelector(".re")
const miPlay = document.querySelector(".mi")
const faPlay = document.querySelector(".fa")
const solPlay = document.querySelector(".sol")
const laPlay = document.querySelector(".la")
const siPlay = document.querySelector(".si")
const doTwoPlay = document.querySelector(".doTwo")

doPlay.addEventListener("click", () => {
    playNote(doOne);
  });
  
  rePlay.addEventListener("click", () => {
    playNote(re);
  });
  
  miPlay.addEventListener("click", () => {
    playNote(mi);
  });
  
  faPlay.addEventListener("click", () => {
    playNote(fa);
  });
  
  solPlay.addEventListener("click", () => {
    playNote(sol);
  });
  
  laPlay.addEventListener("click", () => {
    playNote(la);
  });
  
  siPlay.addEventListener("click", () => {
    playNote(si);
  });
  
  doTwoPlay.addEventListener("click", () => {
    playNote(doTwo);
  });