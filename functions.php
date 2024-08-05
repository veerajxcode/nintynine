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

if( ! defined( 'NINTYNINE_BUILD_URI' ) ){
   define( 'NINTYNINE_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if( ! defined( 'NINTYNINE_BUILD_JS_URI' ) ){
   define( 'NINTYNINE_BUILD_JS_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/js' );
}

if( ! defined( 'NINTYNINE_BUILD_JS_DIR_PATH' ) ){
   define( 'NINTYNINE_BUILD_JS_DIR_PATH', untrailingslashit( get_template_directory() ) . '/assets/build/js' );
}

if( ! defined( 'NINTYNINE_BUILD_IMG_URI' ) ){
   define( 'NINTYNINE_BUILD_IMG_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/src/img' );
}

if( ! defined( 'NINTYNINE_BUILD_CSS_URI' ) ){
   define( 'NINTYNINE_BUILD_CSS_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build/css' );
}

if( ! defined( 'NINTYNINE_BUILD_CSS_DIR_PATH' ) ){
   define( 'NINTYNINE_BUILD_CSS_DIR_PATH', untrailingslashit( get_template_directory() ) . '/assets/build/css' );
}

require_once NINTYNINE_DIR_PATH . '/inc/helpers/autoloader.php';
require_once NINTYNINE_DIR_PATH . '/inc/helpers/template-tags.php';
function nintynine_get_theme_instance() {
\NINTYNINE_THEME\Inc\NINTYNINE_THEME::get_instance();
}

nintynine_get_theme_instance();

?>