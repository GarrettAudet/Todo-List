/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass TaskManager {\n    constructor() {\n        this.initializeHighlighting();\n        this.initializeThemeSwitching();\n        this.menuOverview();\n        this.appendProject();\n        this.removeTask();\n        this.addNewTask();\n        this.removeListedTask();\n    }\n\n    initializeHighlighting() {\n        const tasksTitle = document.querySelector('.rightPanel h1');\n        const buttons = [\n            { element: document.querySelector('.home-all-task'), title: 'All Tasks' },\n            { element: document.querySelector('.home-today'), title: 'Today' },\n            { element: document.querySelector('.home-week'), title: 'Next 7 Days' },\n        ];\n\n        const updateTitleAndHighlight = (title, activeButton) => {\n            tasksTitle.textContent = title;\n            buttons.forEach(button => {\n                if (button.element === activeButton) {\n                    button.element.classList.add('highlight');\n                } else {\n                    button.element.classList.remove('highlight');\n                }\n            });\n        };\n\n        buttons.forEach(button => {\n            button.element.addEventListener('click', () => updateTitleAndHighlight(button.title, button.element));\n        });\n    }\n\n    menuOverview() {\n        const menuButton = document.querySelector('.menu');\n        const leftPanel = document.querySelector('.leftPanel');\n        const rightPanel = document.querySelector('.rightPanel');\n\n        menuButton.addEventListener('click', () => {\n            leftPanel.classList.toggle('leftPanel-hidden');\n\n            if (leftPanel.classList.contains('leftPanel-hidden')) {\n                rightPanel.classList.remove('rightPanel-reduced');\n                rightPanel.classList.add('rightPanel-full');\n            } else {\n                rightPanel.classList.remove('rightPanel-full');\n                rightPanel.classList.add('rightPanel-reduced');\n            }\n        });\n    }\n\n    initializeThemeSwitching() {\n        const themeSwitcher = document.querySelector('.theme');\n        const sunIcon = document.querySelector('.theme-icon');\n        const moonIcon = document.querySelector('.fa-moon');\n        \n        themeSwitcher.addEventListener('click', () => {\n            document.body.classList.toggle('dark-theme');\n            sunIcon.style.display = document.body.classList.contains('dark-theme') ? 'none' : 'block';\n            moonIcon.style.display = document.body.classList.contains('dark-theme') ? 'block' : 'none';\n        });\n    }\n\n    appendProject() {\n        const addTask = document.querySelector('.project-button');\n        const displayToggle = document.querySelector('.overlay-new');\n\n        addTask.addEventListener('click', () => {\n            displayToggle.style.display = \"flex\";\n        });\n    }\n\n    removeTask() {\n        const addTask = document.querySelector('.exit-task');\n        const displayToggle = document.querySelector('.overlay-new');\n\n        addTask.addEventListener('click', () => {\n            displayToggle.style.display = \"none\";\n        });\n    }\n\n    addNewTask() {\n        const insertTask = document.querySelector('.insert-task');\n        insertTask.addEventListener('click', (event) => {\n            // Prevent default form submission if using a <form> element\n            event.preventDefault();\n        \n            // Create a new task div and populate it with values from the form\n            const taskDiv = document.createElement('div');\n            taskDiv.className = 'task centered-flex display-between';\n        \n            // Assuming you have containers to place the title and details\n            const title = document.querySelector('.task-title').value;\n            const details = document.querySelector('.task-details').value;\n            const dueDate = document.querySelector('.calendar').value;\n            const priority = document.querySelector('input[name=\"priority\"]:checked').value;\n\n            // Insert HTML\n            this.ListedTaskHTML(priority, title, details, dueDate, taskDiv);\n                \n            // Insert the new task into the document\n            document.querySelector('.task-list').appendChild(taskDiv);\n        \n            // Reset the form fields to their default values\n            document.getElementById('task-form').reset();\n        \n            // Add event listener to the new trash icon\n            taskDiv.querySelector('.fa-trash').addEventListener('click', function() {\n                taskDiv.remove();\n            });\n        });\n    };\n    ListedTaskHTML = (priority, title, details, dueDate, taskDiv) => {\n        console.log(taskDiv);\n        if (priority === \"low\") {\n            taskDiv.classList.add('low-task')\n\n        } else if (priority === \"medium\") {\n            taskDiv.classList.add('medium-task')\n            \n        } else if (priority === \"high\") {\n            taskDiv.classList.add('high-task')\n        }\n\n        taskDiv.innerHTML = `\n        <div class=\"task-content centered-flex\">\n            <h3>${title}</h3>\n            <p>${details}</p>\n         </div>\n        <div class=\"task-due-date centered-flex\">\n            <label for=\"task-due\">${dueDate}</label>\n            <i class=\"fa-solid fa-trash\"></i>\n        </div>\n    `;\n    }\n\n    removeListedTask() {\n        const deleteTaskIcon = document.querySelectorAll('.fa-trash');\n\n        deleteTaskIcon.forEach(function(deleteTaskIcon) {\n            deleteTaskIcon.addEventListener('click', function() {\n                const taskContainer = this.closest('.task');\n                console.log('Delete');\n\n                if (taskContainer) {\n                    taskContainer.remove();\n                }\n            });\n        });\n    };\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    new TaskManager();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;