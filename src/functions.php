<?php

class wp_ng_theme {

	function enqueue_scripts() {

		wp_enqueue_script('ngScripts', get_template_directory_uri() . '/js/scripts.js', array(), '1.0', false);
		wp_localize_script('ngScripts', 'appInfo',
			array(
				'apiUrl'			 => rest_get_url_prefix() . '/wp/v2/',
				'templateDirectory'  => get_template_directory_uri() . '/',
				'nonce'				 => wp_create_nonce('wp_rest'),
				'isAdmin'			 => current_user_can('administrator')
			)
		);

	}

	// function register_new_field() {
	// 	register_api_field('post',
	// 		'my_awesome_field',
	// 		array(
	// 			'get_callback' => array( $this, 'awesome_field' )
	// 		)
	// 	);
	// }

	// function awesome_field( $object, $field_name, $request ) {
	// 	return 'My Awesome String';
	// }

	function edit_link_route($request) {
		register_rest_route(
			'wp/v2',
			'/editlink',
			array(
				'methods' => 'GET',
				'callback' => array($this, 'edit_link_route_callback'),
				'permission_callback' => function () { return current_user_can('administrator'); }
			)
		);
	}

	function edit_link_route_callback(WP_REST_Request $request) {
		$new_data = array('editPostLink' => get_edit_post_link($request['post'], ''));
		$response = new WP_REST_Response($new_data);
		return $response;
	}
}

$ngTheme = new wp_ng_theme();
add_action('wp_enqueue_scripts', array($ngTheme, 'enqueue_scripts'));
add_action('rest_api_init', array($ngTheme, 'edit_link_route'));
// add_action('rest_api_init', array( $ngTheme, 'register_new_field'));

?>