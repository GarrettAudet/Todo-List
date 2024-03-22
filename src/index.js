document.querySelector('.theme').addEventListener('click', function() {
    this.classList.toggle('theme-on');
});

function initializeEventListener() {
    document.addEventListener('DOMContentLoaded', () => {
        const tasksTitle = document.querySelector('.rightPanel h1');
        const allTasksButton = document.querySelector('.home-all-task');
        const todayButton = document.querySelector('.home-today');
        const next7DaysButton = document.querySelector('.home-week');
        const importantButton = document.querySelector('.home-important');
    
        allTasksButton.addEventListener('click', () => {
            tasksTitle.textContent = 'All Tasks';
        });
    
        todayButton.addEventListener('click', () => {
            tasksTitle.textContent = 'Today';
        });
    
        next7DaysButton.addEventListener('click', () => {
            tasksTitle.textContent = 'Next 7 Days';
        });
    
        importantButton.addEventListener('click', () => {
            tasksTitle.textContent = 'Important';
        });
    });   
}

initializeEventListener();