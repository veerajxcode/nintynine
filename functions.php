<?php
/**
 * Theme Functions.
 * 
 * @package NintyNine
 */
if ( ! defined( 'NINTYNINE_DIR_PATH' )){
   define( 'NINTYNINE_DIR_PATH', untrailingslashit( get_template_directory() ) );
}

if( ! defined( 'NINTYNINE_DIR_URI' ) ){
   define( 'NINTYNINE_DIR_URI', untrailingslashit( get_template_directory_uri() ) );
}

require_once NINTYNINE_DIR_PATH . '/inc/helpers/autoloader.php';

function nintynine_get_theme_instance() {
\NINTYNINE_THEME\Inc\NINTYNINE_THEME::get_instance();
}

nintynine_get_theme_instance();

?>