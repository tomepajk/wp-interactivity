import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/counter/view.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

const {
  state,
  actions
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('create-block', {
  state: {
    todos: [],
    get todoCount() {
      const todos = state.todos;
      return todos.length;
    }
  },
  actions: {
    toggle: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.isOpen = !context.isOpen;
    },
    // Counter
    increaseCount: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.currentCount++;
    },
    decreaseCount: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.currentCount--;
    },
    resetCount: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.currentCount = 0;
    },
    addTodo: () => {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const input = ref.parentElement.querySelector('.todo__input');
      const value = input.value;
      if (!value) return;
      state.todos.push({
        text: value
      });

      // Clear the input field after adding the todo
      input.value = '';
      setTimeout(() => {
        actions.saveTodo();
      }, 0);
    },
    addTodoIfEnter: event => {
      if (event.key === 'Enter') {
        actions.addTodo();
      }
    },
    removeTodo: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      const text = ref.parentElement.querySelector('.todo__item-content').textContent;
      state.todos = state.todos.filter(todo => todo.text !== text);
      setTimeout(() => {
        actions.saveTodo();
      }, 0);
    },
    saveTodo: () => {
      const todos = state.todos;
      localStorage.setItem('todos', JSON.stringify(todos));
    },
    onInit() {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      state.todos = todos;
    }
  },
  callbacks: {
    logIsOpen: () => {
      const {
        isOpen
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      // Log the value of `isOpen` each time it changes.
      console.log(`Is open: ${isOpen}`);
    }
  }
});

//# sourceMappingURL=view.js.map