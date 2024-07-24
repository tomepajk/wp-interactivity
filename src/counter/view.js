/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

const {state, actions} = store( 'create-block', {
	state: {
		todos: [],
		get todoCount() {
			const todos = state.todos;
			return todos.length;
		},
	},
	actions: {
		toggle: () => {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
		// Counter
		increaseCount: () => {
			const context = getContext();
			context.currentCount++;
		},
		decreaseCount: () => {
			const context = getContext();
			context.currentCount--;
		},
		resetCount: () => {
			const context = getContext();
			context.currentCount = 0;
		},

		addTodo: () => {
			const {ref} = getElement();

			const input = ref.parentElement.querySelector('.todo__input');
			const value = input.value;

			if (!value) return;

			state.todos.push({
				text: value
			});

			// Clear the input field after adding the todo
			input.value = '';
		},
		addTodoIfEnter: (event) => {
			if (event.key === 'Enter') {
				actions.addTodo();
			}
		},
		removeTodo: () => {
			const context = getContext();
			const {ref} = getElement();

			const text = ref.parentElement.querySelector('.todo__item-content').textContent;
			state.todos = state.todos.filter(todo => todo.text !== text);
		},
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
		},
	},
} );
