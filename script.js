// JavaScript for interactive elements on the Student CV Website

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the mobile menu elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Add event listener to open the mobile menu when the hamburger icon is clicked
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden'); // Show the mobile menu
        });
    }

    // Add event listener to close the mobile menu when the 'X' icon is clicked
    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); // Hide the mobile menu
        });
    }

    // Function to close the mobile menu, used by navigation links inside the menu
    window.closeMobileMenu = () => {
        mobileMenu.classList.add('hidden'); // Hide the mobile menu
    };

    // Get references to the email address and copy button
    const emailAddressSpan = document.getElementById('email-address');
    const copyEmailButton = document.getElementById('copy-email-button');

    // Add event listener to copy the email address to the clipboard when the copy button is clicked
    if (copyEmailButton && emailAddressSpan) {
        copyEmailButton.addEventListener('click', () => {
            const email = emailAddressSpan.textContent.trim(); // Get the email text
            copyToClipboard(email); // Call the copy function
            // Provide visual feedback to the user
            copyEmailButton.textContent = 'Copied!'; // Change button text
            setTimeout(() => {
                copyEmailButton.textContent = 'Copy'; // Revert button text after a short delay
            }, 2000);
        });
    }

    // Function to copy text to the clipboard
    function copyToClipboard(text) {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = text; // Set its value to the text to be copied
        textarea.style.position = 'fixed'; // Position it off-screen
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea); // Append to the document
        textarea.select(); // Select the text
        try {
            document.execCommand('copy'); // Execute the copy command
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers or environments where execCommand is restricted
            // In a real application, you might show a message like "Please copy manually: [email]"
        } finally {
            document.body.removeChild(textarea); // Remove the temporary textarea
        }
    }
});
