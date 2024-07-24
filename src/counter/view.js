/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'create-block', {
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
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
		},
	},
} );
