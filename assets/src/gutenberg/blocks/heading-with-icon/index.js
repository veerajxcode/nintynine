import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'nintynine-blocks/heading', {
    title: __( 'Heading with Icon', 'nintynine' ),
    icon: 'admin-customizer',
    description: __( 'Add heading and select icon', 'nintynine' ),
    category: 'nintynine',
    edit() {
        return 'Hello World, step 1';
    },
    save() {
        return 'Hello World, step 1';
    },
} );