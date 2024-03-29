import { isToday, isWithinInterval, add } from 'date-fns';

class TaskManager {
    constructor() {
        this.tasks = [];
        this.initializeHighlighting();
        this.initializeThemeSwitching();
        this.menuOverview();
        this.appendProject();
        this.removeTask();
        this.addNewTask();
        this.setupEventDelegation();
        this.setDefaultCategory();
    }

    // Switches the Theme of the Webpage Based on User Selection
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

    // Enables Highlighting over Home Buttons
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

        // Adds an Event Listener to Each Button That Changes the Highlight When Clicked
        buttons.forEach(button => {
            button.element.addEventListener('click', () => updateTitleAndHighlight(button.title, button.element));
        });

        // Renders Task Based on Selection
        const allTasksButton = document.querySelector('.home-all-task');
        allTasksButton.addEventListener('click', () => this.renderTasks('all'));

        const todayButton = document.querySelector('.home-today');
        todayButton.addEventListener('click', () => this.renderTasks('today'));

        const next7DaysButton = document.querySelector('.home-week');
        next7DaysButton.addEventListener('click', () => this.renderTasks('next7Days'));
    }

    // Provides Functionality to Hide and Expand the leftPanel
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

    // Selects the All Tasks Button by Default
    setDefaultCategory() {
        const allTasksButton = document.querySelector('.home-all-task');
        if (allTasksButton) {
            allTasksButton.click();
            allTasksButton.classList.add('highlight');
        }
    }

    // Facilitates the Addition of a New Task Pop-Up
    appendProject() {
        const addTask = document.querySelector('.project-button');
        const displayToggle = document.querySelector('.overlay-new');
    
        addTask.addEventListener('click', () => {
            displayToggle.style.display = "flex";
        });
    }

    // Renders Tasks Based on Selected Button 
    renderTasks(filter) {
        const container = document.querySelector('.task-list'); // Assuming a common container for simplicity
        container.innerHTML = ''; // Clear existing tasks

        let filteredTasks = [];
        if (filter === 'all') {
            filteredTasks = this.tasks;
        } else if (filter === 'today') {
            filteredTasks = this.tasks.filter(task => isToday(new Date(task.dueDate)));
        } else if (filter === 'next7Days') {
            const today = new Date();
            const next7Days = add(today, { days: 7 });
            filteredTasks = this.tasks.filter(task => isWithinInterval(new Date(task.dueDate), { start: today, end: next7Days }));
        }

        for (const task of filteredTasks) {
            const taskElement = task.element.cloneNode(true); 
            container.appendChild(taskElement);
        }
    }

    // Facilitates the Removal of a Task to the Container
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

            // Create a Task Item to Store 
            const task = { title, details, dueDate, priority, element: taskDiv };

            //Insert HTML 
            this.ListedTaskHTML(priority, title, details, dueDate, taskDiv);

            // Push the Tasks to the Array
            this.tasks.push(task);

            // Immediately render tasks
            this.renderTasks('all');

            // Reset the form fields to their default values
            document.getElementById('task-form').reset();
        });
    };

    // Creates the Formatted HTML Based on User Input
    ListedTaskHTML = (priority, title, details, dueDate, taskDiv) => {
        console.log(taskDiv);
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

    // Displays Tasks Based on User Selection
    taskCategoryInsert(dueDate, taskDiv) {
        const today = new Date();
        const next7Days = add(today, { days: 7 });

        // Clone the taskDiv for appending to multiple sections if needed
        const taskForToday = taskDiv.cloneNode(true);
        const taskForWeek = taskDiv.cloneNode(true);

        const addTrashListener = (element) => {
            element.querySelector('.fa-trash').addEventListener('click', function () {
                element.remove();
            });
        };

        if (isToday(dueDate)) {
            const taskForToday = taskDiv.cloneNode(true); // Clone the taskDiv
            addTrashListener(taskForToday); // Add the event listener to the clone
            document.querySelector('.home-today .tasks-container').appendChild(taskForToday);
        }
    
        if (isWithinInterval(dueDate, { start: today, end: next7Days })) {
            const taskForWeek = taskDiv.cloneNode(true); // Clone the taskDiv
            addTrashListener(taskForWeek); // Add the event listener to the clone
            document.querySelector('.home-week .tasks-container').appendChild(taskForWeek);
        }

        // Always append to All Tasks section
        document.querySelector('.home-all-task .tasks-container').appendChild(taskDiv);
    }

    // Attach Event Listener to Parent
    setupEventDelegation() {
        const taskList = document.querySelector('.task-list');

        taskList.addEventListener('click', event => {
            if (event.target.classList.contains('fa-trash')) {
                const taskElement = event.target.closest('.task');
                if (taskElement) {
                    // Remove the task from the internal tasks array
                    this.tasks = this.tasks.filter(task => task.element !== taskElement);

                    // Remove the task element from the DOM
                    taskElement.remove();
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
