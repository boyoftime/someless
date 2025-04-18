document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const programName = urlParams.get('name');
    const programImage = urlParams.get('image');
    const programSize = urlParams.get('size');
    const programDescriptionJson = urlParams.get('description'); // Keep original name
    const programPrice = urlParams.get('price'); // Price is already formatted
    const downloadLink = urlParams.get('downloadLink');

    // --- Populate Page Details (Existing Code) ---
    const nameElement = document.getElementById('program-name');
    const imageElement = document.getElementById('program-thumbnail');
    const sizeElement = document.getElementById('program-size');
    const priceElement = document.getElementById('program-price');
    const linkElement = document.getElementById('download-link');
    const aboutElement = document.getElementById('program-about');
    const featuresElement = document.getElementById('program-features');
    const platformsElement = document.getElementById('program-platforms');

    if (nameElement) nameElement.textContent = programName || 'Program Details';
    if (imageElement) imageElement.src = programImage || 'images/placeholder.png'; // Add a fallback image if needed
    if (sizeElement) sizeElement.textContent = programSize ? `Size: ${programSize} MB` : ''; // Hide if no size
    if (priceElement) priceElement.textContent = programPrice || ''; // Display formatted price directly
    if (linkElement) linkElement.href = downloadLink || '#';

    // Display description details
    if (programDescriptionJson) {
        try {
            const programDescription = JSON.parse(programDescriptionJson); // Parse JSON description

            if (aboutElement) aboutElement.textContent = programDescription.about || 'No description available.';
            if (featuresElement) {
                featuresElement.innerHTML = programDescription.features && programDescription.features.length > 0
                    ? programDescription.features.map(feature => `<li>${feature}</li>`).join('')
                    : '<li>No specific features listed.</li>';
            } else if (featuresElement) {
                 featuresElement.innerHTML = '<li>No specific features listed.</li>';
            }

            if (platformsElement) {
                 platformsElement.innerHTML = programDescription.platforms && programDescription.platforms.length > 0
                     ? programDescription.platforms.map(platform => `<li>${platform}</li>`).join('')
                     : '<li>Compatibility information not provided.</li>';
            } else if (platformsElement) {
                 platformsElement.innerHTML = '<li>Compatibility information not provided.</li>';
            }

        } catch (e) {
            console.error("Error parsing description JSON:", e);
            if (aboutElement) aboutElement.textContent = 'Error loading description.';
            if (featuresElement) featuresElement.innerHTML = '';
            if (platformsElement) platformsElement.innerHTML = '';
        }
    } else {
         // Handle case where description is missing
         if (aboutElement) aboutElement.textContent = 'No description available.';
         if (featuresElement) featuresElement.innerHTML = '<li>No specific features listed.</li>';
         if (platformsElement) platformsElement.innerHTML = '<li>Compatibility information not provided.</li>';
    }

    // --- NEW: Modal Functionality ---
    const modal = document.getElementById("imageModal");
    const thumbnail = document.getElementById("program-thumbnail");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-button"); // Use querySelector for class

    // Check if all necessary modal elements exist before adding listeners
    if (thumbnail && modal && modalImg && closeBtn) {
        // When the user clicks the thumbnail, open the modal
        thumbnail.onclick = function() {
            modal.style.display = "flex"; // Use flex for alignment
            modalImg.src = this.src; // Use the current thumbnail src for the modal
            modalImg.alt = this.alt; // Copy alt text
        }

        // Function to close the modal
        const closeModal = function() {
            modal.style.display = "none";
        }

        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = closeModal;

        // When the user clicks anywhere outside of the modal image, close it
        modal.onclick = function(event) {
            // Check if the click target is the modal background itself
            if (event.target === modal) {
                closeModal();
            }
        }

        // Optional: Close the modal if the user presses the Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && modal.style.display === "flex") {
                closeModal();
            }
        });

    } else {
        console.warn("Modal elements not found. Lightbox functionality disabled.");
        // Optionally hide the thumbnail cursor if modal isn't working
        if(thumbnail) thumbnail.style.cursor = 'default';
    }
    // --- End of NEW Modal Functionality ---

});