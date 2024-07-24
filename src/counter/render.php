<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generate unique id for aria-controls.
$unique_id = wp_unique_id( 'p-' );

$context = array(
	'isOpen'       => false,
	'currentCount' => 0,
	'todos'        => array(),
);
?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context( $context ); ?>
	data-wp-watch="callbacks.logIsOpen"
>
	<button
		data-wp-on--click="actions.toggle"
		data-wp-bind--aria-expanded="context.isOpen"
		aria-controls="<?php echo esc_attr( $unique_id ); ?>"
	>
		<?php esc_html_e( 'Toggle', 'codeable-wp-interactivity' ); ?>
	</button>

	<p
		id="<?php echo esc_attr( $unique_id ); ?>"
		data-wp-bind--hidden="!context.isOpen"
	>
		<?php
			esc_html_e( 'Codeable Wp Interactivity - hello from an interactive block!', 'codeable-wp-interactivity' );
		?>
	</p>

    <!-- Counter -->
    <h2>Counter</h2>
    <div class="counter">
        <div class="counter__value" data-wp-text="context.currentCount">

        </div>
        <div class="counter__controls">
            <button class="counter__increase" data-wp-on--click="actions.increaseCount">
                Increase
            </button>
            <button class="counter__decrease" data-wp-on--click="actions.decreaseCount">
                Decrease
            </button>
            <button class="counter__decrease" data-wp-on--click="actions.resetCount">
                Reset
            </button>
        </div>
    </div>


    <!-- To Do List -->
    <h2>Todo</h2>
    <div class="todo">
        <div class="todo__input-container">
            <input type="text" class="todo__input"
                   data-wp-on--keydown="actions.addTodoIfEnter"
            >
            <button class="todo__add" data-wp-on--click="actions.addTodo">
                Add
            </button>
        </div>
        <div class="todo__list">
            <template data-wp-each="state.todos">
                <div class="todo__item">
                    <span class="todo__item-content" data-wp-text="context.item.text"></span>
                    <button class="todo__remove"  data-wp-on--click="actions.removeTodo">
                        Remove
                    </button>
                </div>
            </template>
        </div>
    </div>
</div>
