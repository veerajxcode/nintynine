/**
 * Heading with Icon block.
 *
 * @package
 */

//import { getIconComponent } from './icons-map';

/**
 * Internal dependencies.
 */
//import Edit from './edit';
//import Save from './save';

/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
//import { RichText } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType( 'nintynine-blocks/heading', {
	/**
	 * Block title.
	 *
	 * @type {string}
	 */
	title: __( 'Heading with Icon', 'nintynine' ),

	/**
	 * Block icon.
	 *
	 * @type {string}
	 */
	icon: 'admin-customizer',

	/**
	 * Block description.
	 *
	 * @type {string}
	 */
	description: __( 'Add Heading and select Icons', 'nintynine' ),

	/**
	 * Block category.
	 *
	 * @type {string}
	 */
	category: 'nintynine',

	/**
	 * Attributes.
	 */
	

	edit() {
		return '<div>Hello there</div>';
	},
	save() {
		return '<div>Hello there2</div>';
	},
} );