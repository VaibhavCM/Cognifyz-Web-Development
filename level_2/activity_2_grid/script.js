
// Select all Learn More buttons
const buttons = document.querySelectorAll(".learn-more");

// Get modal elements
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

// Create Bootstrap modal
const destinationModal = new bootstrap.Modal(
    document.getElementById("destinationModal")
);

// Add click event to every button
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get destination information
        const place = button.dataset.place;
        const info = button.dataset.info;

        // Update modal content
        modalTitle.textContent = place;
        modalDescription.textContent = info;

        // Show modal
        destinationModal.show();

    });

});
