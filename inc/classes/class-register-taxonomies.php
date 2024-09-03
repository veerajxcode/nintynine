<?php
/**
 * Register Custom Taxonomies
 *
 * @package NintyNine
 */

namespace NINTYNINE_THEME\Inc;

use NINTYNINE_THEME\Inc\Traits\Singleton;

class Register_Taxonomies {
	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'init', [ $this, 'create_genre_taxonomy' ] );
		add_action( 'init', [ $this, 'create_year_taxonomy' ] );

	}

	// Register Taxonomy Genre
	public function create_genre_taxonomy() {

		$labels = [
			'name'              => _x( 'Genres', 'taxonomy general name', 'nintynine' ),
			'singular_name'     => _x( 'Genre', 'taxonomy singular name', 'nintynine' ),
			'search_items'      => __( 'Search Genres', 'nintynine' ),
			'all_items'         => __( 'All Genres', 'nintynine' ),
			'parent_item'       => __( 'Parent Genre', 'nintynine' ),
			'parent_item_colon' => __( 'Parent Genre:', 'nintynine' ),
			'edit_item'         => __( 'Edit Genre', 'nintynine' ),
			'update_item'       => __( 'Update Genre', 'nintynine' ),
			'add_new_item'      => __( 'Add New Genre', 'nintynine' ),
			'new_item_name'     => __( 'New Genre Name', 'nintynine' ),
			'menu_name'         => __( 'Genre', 'nintynine' ),
		];
		$args   = [
			'labels'             => $labels,
			'description'        => __( 'Movie Genre', 'nintynine' ),
			'hierarchical'       => true,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_tagcloud'      => true,
			'show_in_quick_edit' => true,
			'show_admin_column'  => true,
			'show_in_rest'       => true,
		];

		register_taxonomy( 'genre', [ 'movies' ], $args );

	}

	// Register Taxonomy Year
	public function create_year_taxonomy() {

		$labels = [
			'name'              => _x( 'Years', 'taxonomy general name', 'nintynine' ),
			'singular_name'     => _x( 'Year', 'taxonomy singular name', 'nintynine' ),
			'search_items'      => __( 'Search Years', 'nintynine' ),
			'all_items'         => __( 'All Years', 'nintynine' ),
			'parent_item'       => __( 'Parent Year', 'nintynine' ),
			'parent_item_colon' => __( 'Parent Year:', 'nintynine' ),
			'edit_item'         => __( 'Edit Year', 'nintynine' ),
			'update_item'       => __( 'Update Year', 'nintynine' ),
			'add_new_item'      => __( 'Add New Year', 'nintynine' ),
			'new_item_name'     => __( 'New Year Name', 'nintynine' ),
			'menu_name'         => __( 'Year', 'nintynine' ),
		];
		$args   = [
			'labels'             => $labels,
			'description'        => __( 'Movie Release Year', 'nintynine' ),
			'hierarchical'       => false,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_tagcloud'      => true,
			'show_in_quick_edit' => true,
			'show_admin_column'  => true,
			'show_in_rest'       => true,
		];
		register_taxonomy( 'movie-year', [ 'movies' ], $args );

	}

}
