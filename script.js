const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("mobile-nav-links");

const hamburgerIcon = menuToggle.querySelector(".hamburger-icon");
const closeIcon = menuToggle.querySelector(".close-icon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  const menuOpen = navLinks.classList.contains("show");
  hamburgerIcon.style.display = menuOpen ? "none" : "block";
  closeIcon.style.display = menuOpen ? "block" : "none";

  document.body.classList.toggle("menu-open", menuOpen);
});

// Close nav menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    // Hide the nav menu
    document.getElementById("mobile-nav-links").classList.remove("show");

    // Show the hamburger icon again
    document.querySelector(".hamburger-icon").style.display = "block";
    document.querySelector(".close-icon").style.display = "none";

    // Unhide the main content
    document.body.classList.remove("menu-open");
  });
});

const div = document.querySelector(".intro_heading");
const intro_heading = "Hello, I'm Kenewang Oganne";

let typingTimeout; // to manage ongoing timeouts

function textTypingEffect(element, intro_heading, i = 0) {
  if (i === 0) {
    element.textContent = "";
    clearTimeout(typingTimeout); // stop any previous typing
  }

  element.textContent += intro_heading[i];

  if (i === intro_heading.length - 1) {
    return;
  }

  typingTimeout = setTimeout(
    () => textTypingEffect(element, intro_heading, i + 1),
    70
  );
}

// Initial run
textTypingEffect(div, intro_heading);

// Restart typing on every screen resize
window.addEventListener("resize", () => {
  textTypingEffect(div, intro_heading);
});
