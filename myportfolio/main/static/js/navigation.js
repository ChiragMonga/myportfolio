document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".custom-navbar");
    const toggler = document.querySelector(".navbar-toggler");

    // Add event listener to toggler button
    toggler.addEventListener("click", () => {
        navbar.classList.toggle("toggled"); // Toggle the 'toggled' class
    });

    // Add listener for clicking outside the navbar
    document.addEventListener("click", (event) => {
        const navbarCollapse = document.querySelector(".navbar-collapse"); // Select the navbar-collapse
        const navbarToggler = document.querySelector(".navbar-toggler"); // Select the toggler button

        // Check if the click was outside the navbar-collapse and toggler
        if (
            !navbarCollapse.contains(event.target) &&
            !navbarToggler.contains(event.target)
        ) {
            // If the navbar is expanded, collapse it
            if (navbarCollapse.classList.contains("show")) {
                const collapseInstance = bootstrap.Collapse.getInstance(
                    navbarCollapse
                );
                if (collapseInstance) {
                    collapseInstance.hide(); // Use Bootstrap's collapse method
                }
            }
        }
    });
});
