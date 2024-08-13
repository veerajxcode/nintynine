/**
 * Heading with Icon block.
 *
 * @package
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';



/**
 * Register block type.
 */
registerBlockType( 'nintynine-blocks/heading-with-icon', {
	title: __( 'Heading with Icon', 'nintynine' ),
	icon: 'admin-customizer',
	category: 'nintynine',

	edit() {
		return <div>Hello there</div>;
	},
	save() {
		return <div>Hello there2</div>;
	},
} );