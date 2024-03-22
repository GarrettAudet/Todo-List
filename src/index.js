document.querySelector('.theme').addEventListener('click', function() {
    this.classList.toggle('theme-on');
});

function initializeEventListener() {
    document.addEventListener('DOMContentLoaded', () => {
        const tasksTitle = document.querySelector('.rightPanel h1');
        const buttons = [
            { element: document.querySelector('.home-all-task'), title: 'All Tasks' },
            { element: document.querySelector('.home-today'), title: 'Today' },
            { element: document.querySelector('.home-week'), title: 'Next 7 Days' },
            { element: document.querySelector('.home-important'), title: 'Important' }
        ];

        // Function to update the title and highlight the active button
        const updateTitleAndHighlight = (title, activeButton) => {
            tasksTitle.textContent = title;
            buttons.forEach(button => {
                if (button.element === activeButton) {
                    button.element.classList.add('highlight');
                } else {
                    button.element.classList.remove('highlight');
                }
            });
        };

        // Add click event listeners to buttons
        buttons.forEach(button => {
            button.element.addEventListener('click', () => updateTitleAndHighlight(button.title, button.element));
        });
    });   
}

initializeEventListener();