class TaskManager {
    constructor() {
        this.initializeHighlighting();
        this.initializeThemeSwitching();
        this.menuOverview();
        this.appendProject();
        this.removeTask();
    }

    initializeHighlighting() {
        const tasksTitle = document.querySelector('.rightPanel h1');
        const buttons = [
            { element: document.querySelector('.home-all-task'), title: 'All Tasks' },
            { element: document.querySelector('.home-today'), title: 'Today' },
            { element: document.querySelector('.home-week'), title: 'Next 7 Days' },
            { element: document.querySelector('.home-important'), title: 'Important' }
        ];

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

        buttons.forEach(button => {
            button.element.addEventListener('click', () => updateTitleAndHighlight(button.title, button.element));
        });
    }

    menuOverview() {
        const menuButton = document.querySelector('.menu');
        const leftPanel = document.querySelector('.leftPanel');
        const rightPanel = document.querySelector('.rightPanel');

        menuButton.addEventListener('click', () => {
            leftPanel.classList.toggle('leftPanel-hidden');

            if (leftPanel.classList.contains('leftPanel-hidden')) {
                rightPanel.classList.remove('rightPanel-reduced');
                rightPanel.classList.add('rightPanel-full');
            } else {
                rightPanel.classList.remove('rightPanel-full');
                rightPanel.classList.add('rightPanel-reduced');
            }
        });
    }

    initializeThemeSwitching() {
        const themeSwitcher = document.querySelector('.theme');
        const sunIcon = document.querySelector('.theme-icon');
        const moonIcon = document.querySelector('.fa-moon');
        
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            sunIcon.style.display = document.body.classList.contains('dark-theme') ? 'none' : 'block';
            moonIcon.style.display = document.body.classList.contains('dark-theme') ? 'block' : 'none';
        });
    }

    appendProject() {
        const addTask = document.querySelector('.project-button');
        const displayToggle = document.querySelector('.overlay-new');

        addTask.addEventListener('click', () => {
            displayToggle.style.display = "flex";
        });
    }

    removeTask() {
        const addTask = document.querySelector('.exit-task');
        const displayToggle = document.querySelector('.overlay-new');

        addTask.addEventListener('click', () => {
            displayToggle.style.display = "none";
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
