/**
 * Heading with Icon block.
 *
 * @package
 */

import { getIconComponent } from './icons-map';

import Edit from "./edit";

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';





registerBlockType( 'nintynine-blocks/nintynine-heading-icon', {
	title: __( 'Heading with Icon', 'nintynine' ),
	icon: 'admin-customizer',
	description: __('Add heading and select icon', 'nintynine'),
	category: 'nintynine',
	attributes: {
		option: {
			type: 'string',
			default: 'dos',
		},
		content: {
            type: 'string',
            source: 'html',
            selector: 'h4',
			default: __('Dos', 'nintynine'),
        },
	},
	edit: Edit,

	save( props ) {
		const {
			attributes: { option, content },
		} = props;
		const HeadingIcon = getIconComponent( option );

		return (
			<div className="nintynine-icon-heading">
				<span className="nintynine-icon-heading__heading">
					<HeadingIcon />
				</span>
				{ /* Saves <h2>Content added in the editor...</h2> to the database for frontend display */ }
				<RichText.Content tagName="h4" value={ content } />
			</div>
		);
	},
} );
