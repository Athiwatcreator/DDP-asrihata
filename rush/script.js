const themeButton = document.querySelector("#theme-toggle");
const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#nav");
const questForm = document.querySelector("#quest-form");
const questResult = document.querySelector("#quest-result");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkModeIsOn = document.body.classList.contains("dark");
  themeButton.textContent = darkModeIsOn ? "☀ Light" : "☾ Theme";
  themeButton.setAttribute("aria-label", darkModeIsOn ? "Switch to light theme" : "Switch to dark theme");
});

menuButton.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(menuIsOpen));
  menuButton.textContent = menuIsOpen ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

questForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const playerName = document.querySelector("#player-name").value.trim();
  const mood = document.querySelector("#player-mood").value;

  if (!playerName) {
    questResult.textContent = "Enter your player name to begin!";
    return;
  }

  const quests = {
    cozy: "Your quest: find a cozy world, build something small, and take your time.",
    action: "Your quest: follow a mysterious map, solve a challenge, and explore somewhere new.",
    story: "Your quest: choose a story-rich game and see where your decisions take you."
  };

  questResult.textContent = `Welcome, ${playerName}! ${quests[mood]}`;
});
