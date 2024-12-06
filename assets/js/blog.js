$(document).ready(function(){
    // Select all "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the corresponding content wrapper
            const contentWrapper = this.previousElementSibling;

            // Toggle the 'expanded' class
            contentWrapper.classList.toggle('expanded');

            // Update the button text
            if (contentWrapper.classList.contains('expanded')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        });
    });
});