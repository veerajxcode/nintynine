<?php
/**
 * Template for entry content
 * 
 * To be used inside WordPress The Loop
 * 
 * @package NintyNine
 */
?>
 <div class="entry-content">
    <?php
    if ( is_single() ) {
        the_content(
            sprintf(
                wp_kses(
                    __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'nintynine' ),
                    [
                        'span' => [
                            'class' => []
                        ]
                    ]
                ),
                the_title( '<span class="screen-reader-text">"', '"</span>', false )
            )
        );
        wp_link_pages (
            [
                'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'nintynine' ),
                'after' => '</div>',
            ]
        );
    } else {
        nintynine_the_excerpt();
        printf( '<br>' );
        echo nintynine_excerpt_more();
    }

    ?>
 </div>