document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector(".hero-content h1.typing-container");

    // Ensure the width is set for typing effect
    typingText.style.width = `${typingText.scrollWidth}px`;

    // Remove the cursor after the typing animation ends
    setTimeout(() => {
        typingText.classList.remove("typing-container");
        typingText.classList.add("no-cursor");
    }, 4000); // Match the duration of the typing animation (4s)
});
