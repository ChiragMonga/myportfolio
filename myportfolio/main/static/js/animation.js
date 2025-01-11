document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const navLinks = document.querySelectorAll(".navbar-links .nav-link");

    const options = {
        root: null, // Uses the viewport as the container
        threshold: 0.5, // At least 50% of the card must be visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the active class to the visible card
                entry.target.classList.add("active");

                // Highlight the corresponding nav link
                navLinks.forEach((link) => link.classList.remove("active"));
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, options);

    // Observe all cards
    cards.forEach((card) => observer.observe(card));

    // Smooth scroll behavior for navbar links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

