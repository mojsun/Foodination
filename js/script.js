// function userScroll() {
//   const navbar = document.querySelector(".navbar");
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       navbar.classList.add("bg-danger");
//       navbar.classList.add("navbar-sticky");
//     } else {
//       navbar.classList.remove("bg-primary");
//       navbar.classList.remove("navbar-sticky");
//     }
//   });
// }

function incrementStats() {
  const counters = document.querySelectorAll(".Icon_Numbers");
  counters.forEach((counter) => {
    counter.innertText = 0;
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;
      const increment = target / 200;
      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 25);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}
function runTypingEffect() {
  const text = " Welcome To Foodie Nation";
  const typingElement = document.getElementById("typing-text");
  const typingDelaying = 130;
  typeText(text, typingElement, typingDelaying);
}
function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}
// document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", incrementStats);
document.addEventListener("DOMContentLoaded", runTypingEffect);
