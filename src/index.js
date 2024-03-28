class TaskManager {
    constructor() {
        this.initializeHighlighting();
        this.initializeThemeSwitching();
        this.menuOverview();
        this.appendProject();
        this.removeTask();
        this.addNewTask();
        this.removeListedTask();
        this.ListedTaskHTML();
    }

    initializeHighlighting() {
        const tasksTitle = document.querySelector('.rightPanel h1');
        const buttons = [
            { element: document.querySelector('.home-all-task'), title: 'All Tasks' },
            { element: document.querySelector('.home-today'), title: 'Today' },
            { element: document.querySelector('.home-week'), title: 'Next 7 Days' },
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

    addNewTask() {
        const insertTask = document.querySelector('.insert-task');
        insertTask.addEventListener('click', (event) => {
            // Prevent default form submission if using a <form> element
            event.preventDefault();
        
            // Create a new task div and populate it with values from the form
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task centered-flex display-between';
        
            // Assuming you have containers to place the title and details
            const title = document.querySelector('.task-title').value;
            const details = document.querySelector('.task-details').value;
            const dueDate = document.querySelector('.calendar').value;
            const priority = document.querySelector('input[name="priority"]:checked').value;

            // Insert HTML
            this.ListedTaskHTML(priority, title, details, dueDate, taskDiv);
                
            // Insert the new task into the document
            document.querySelector('.task-list').appendChild(taskDiv);
        
            // Reset the form fields to their default values
            document.getElementById('task-form').reset();
        
            // Add event listener to the new trash icon
            taskDiv.querySelector('.fa-trash').addEventListener('click', function() {
                taskDiv.remove();
            });
        });
    };

    ListedTaskHTML(priority, title, details, dueDate, taskDiv) {
        if (priority === "low") {
            taskDiv.classList.add('low-task')

        } else if (priority === "medium") {
            taskDiv.classList.add('medium-task')
            
        } else if (priority === "high") {
            taskDiv.classList.add('high-task')
        }

        taskDiv.innerHTML = `
        <div class="task-content centered-flex">
            <h3>${title}</h3>
            <p>${details}</p>
         </div>
        <div class="task-due-date centered-flex">
            <label for="task-due">${dueDate}</label>
            <i class="fa-solid fa-trash"></i>
        </div>
    `;
    }

    removeListedTask() {
        const deleteTaskIcon = document.querySelectorAll('.fa-trash');

        deleteTaskIcon.forEach(function(deleteTaskIcon) {
            deleteTaskIcon.addEventListener('click', function() {
                const taskContainer = this.closest('.task');
                console.log('Delete');

                if (taskContainer) {
                    taskContainer.remove();
                }
            });
        });
    };
}

document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
