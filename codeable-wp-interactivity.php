<?php
/**
 * Plugin Name:       Codeable Wp Interactivity
 * Description:       An interactive block with the Interactivity API
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       codeable-wp-interactivity
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_codeable_wp_interactivity_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build/counter' );
	register_block_type_from_metadata( __DIR__ . '/build/state-block' );
}
add_action( 'init', 'create_block_codeable_wp_interactivity_block_init' );


add_action('generate_after_header', 'add_todo_counter_below_header');

function add_todo_counter_below_header() {
	?>
	<div data-wp-interactive="create-block">
		<h1> ToDO Count: <span data-wp-text="state.todoCount"></span></h1>
	</div>
	<?php
}