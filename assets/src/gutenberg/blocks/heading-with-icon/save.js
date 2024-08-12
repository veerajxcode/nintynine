/**
 * Internal Dependencies.
 */
//import { getIconComponent } from './icons-map';

/**
 * WordPress Dependencies.
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Save function.
 *
 * @param {Object} props Props
 *
 * @return {Object} Content.
 */
const Save = ( props ) => {
	const { className, attributes } = props;
	const { option, content } = attributes;

	const HeadingIcon = getIconComponent( option );

	return (
		<div className="nintynine-icon-heading">
			<span className="nintynine-icon-heading__heading">
				<HeadingIcon />
			</span>
			{ /* Saves <h2>Content added in the editor...</h2> to the database for frontend display */ }
			<RichText.Content tagName="h4" className={ className } value={ content } />
		</div>
	);
};

export default Save;
