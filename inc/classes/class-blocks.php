<?php
/**
 * Theme Blocks
 * 
 * @package NintyNine
 */

namespace NINTYNINE_THEME\Inc;

use NINTYNINE_THEME\Inc\Traits\Singleton;

class Blocks {
    use Singleton;

    protected function __construct(){
        //load class.
        $this->setup_hooks();
    }

    protected function setup_hooks(){
        /**
         * Actions
         */
        add_filter( 'block_categories_all', [ $this, 'add_block_categories' ] );
    }

    public function add_block_categories( $categories ) {
        $categories_slugs = wp_list_pluck( $categories, 'slug' );

        return in_array( 'nintynine', $categories_slugs, true ) ? $categories : 
        array_merge( 
            $categories, 
            [
                [
                    'slug' => 'nintynine', 
                    'title' => __( 'NintyNine Blocks', 'nintynine' ), 
                    'icon' => 'table-row-after' 
                ]
            ]
        );

    }
   
}