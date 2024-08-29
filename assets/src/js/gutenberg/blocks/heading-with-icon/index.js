/**
 * Heading with Icon block.
 *
 * @package
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';


import Edit from "./edit";
import { getIconComponent } from './icons-map';

registerBlockType( 'nintynine-blocks/nintynine-heading-icon', {
	title: __( 'Heading with Icon', 'nintynine' ),
	icon: 'admin-customizer',
	description: __('Add heading and select icon', 'nintynine'),
	category: 'nintynine',
	attributes: {
		option: {
			type: 'string',
			default: 'dos'
		},
		content: {
            type: 'string',
            source: 'html',
            selector: 'h4',
			default: __('Dos', 'nintynine')
        },
	},
	edit: Edit,

	save({attributes: {option, content} }) {
		const HeadingIcon = getIconComponent( option );
		return (
			<div className="nintynine-icon-heading">
				<span className="nintynine-icon-heading__heading">
					<HeadingIcon/>
				</span>
				<RichText.Content tagName="h4" value={content}/>
			</div>
		)
	},
} );