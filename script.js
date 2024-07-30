document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "Humility is not thinking less of yourself, but thinking of yourself less. - C.S. Lewis",
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
        "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
        "Whether you think you can or you think you can't, you're right. - Henry Ford",
        "The best way to predict your future is to create it. - Peter Drucker"
    ];

    let currentQuoteIndex = 0;
    const quoteText = document.getElementById('quote-text');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    function showQuote(index) {
        quoteText.textContent = quotes[index];
    }

    leftArrow.addEventListener('click', function () {
        currentQuoteIndex = (currentQuoteIndex > 0) ? currentQuoteIndex - 1 : quotes.length - 1;
        showQuote(currentQuoteIndex);
    });

    rightArrow.addEventListener('click', function () {
        currentQuoteIndex = (currentQuoteIndex < quotes.length - 1) ? currentQuoteIndex + 1 : 0;
        showQuote(currentQuoteIndex);
    });

    // Initialize with the first quote
    showQuote(currentQuoteIndex);
});


document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".hero-content h1.typing-container");

    // Ensure the width is set for typing effect
    typingText.style.width = `${typingText.scrollWidth}px`;

    // Remove the cursor after the typing animation ends
    setTimeout(() => {
        typingText.classList.remove("typing-container");
        typingText.classList.add("no-cursor");
    }, 4000); // Match the duration of the typing animation (4s)
});
