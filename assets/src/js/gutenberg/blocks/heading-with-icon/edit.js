import { RichText, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, RadioControl } from '@wordpress/components';
import { getIconComponent } from "./icons-map";

const Edit = ( { className, attributes, setAttributes} ) => {

    const { option, content } = attributes;

    const HeadingIcon = getIconComponent( option );

    return (
       <div className="nintynine-icon-heading">
        <span className="nintynine-icon-heading__heading">
        <HeadingIcon/>
        </span>
        <RichText
            tagName="h4"
            className= { className }
            value= { content }
            onChange={ ( content ) => setAttributes( { content: content } ) }
            placeholder={ __( 'Heading...', 'nintynine' ) }
        />
        <InspectorControls>
            <PanelBody title={__('Block Settings', 'nintynine')}>
                <RadioControl
                    label={ __( 'Select the icon', 'nintynine') }
                    help={ __(  'Controls icon selection', 'nintynine' ) }
                    selected={ option }
                    options={ [
                        {label: __('Dos', 'nintynine'), value:'dos'},
                        {label: __('Dont\'s','nintynine'), value:'donts'},
                    ] }
                    onChange={ (option) => {setAttributes( { option } ) } }
                />
            </PanelBody>
        </InspectorControls>
       </div> 
    )
}

export default Edit