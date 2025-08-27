// 1. Welcome alert when user visits the homepage
window.addEventListener("load", function() {
    if (window.location.pathname.includes("index.html")) {
        alert("Welcome to Daily Grand! Stay updated with the latest news and lifestyle tips.");
    }
});

// 2. Dynamic year in the footer
const footer = document.querySelector("footer p");
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} Daily Grand. All Rights Reserved.`;
}

// 3. Simple contact form validation
const contactForm = document.querySelector("form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            event.preventDefault(); // Stop form from submitting
        } else {
            alert("Thank you for contacting us! We will get back to you soon.");
        }
    });
}

// 4. Example: Change background color of latest news articles on hover
const newsArticles = document.querySelectorAll(".latest-news article");
newsArticles.forEach(article => {
    article.addEventListener("mouseenter", function() {
        article.style.backgroundColor = "#f0f8ff";
    });
    article.addEventListener("mouseleave", function() {
        article.style.backgroundColor = "transparent";
    });
});