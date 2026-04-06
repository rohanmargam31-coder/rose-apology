// YouTube Player
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytMusic');
}

// Typing effect
const text = "I’m really sorry Papa... Please forgive me 🙏";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Floating roses continuously
setInterval(() => {
  let rose = document.createElement("div");
  rose.classList.add("rose");
  rose.innerText = "🌹";

  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(rose);

  setTimeout(() => rose.remove(), 8000);
}, 300);

// Button click
function acceptApology() {
  document.getElementById("response").innerText = "Thank you Papa ❤️";

  // Start music on click
  if (player) player.playVideo();

  // Heart explosion
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

// Music controls
function playMusic() {
  if (player) player.playVideo();
}

function pauseMusic() {
  if (player) player.pauseVideo();
}
