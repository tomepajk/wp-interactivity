/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

const {actions} = store( 'create-block', {
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
			const context = getContext();
			const {ref} = getElement();

			const input = ref.parentElement.querySelector('.todo__input');
			const value = input.value;

			if (!value) return;

			context.todos.push({
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
			context.todos = context.todos.filter(todo => todo.text !== text);
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
