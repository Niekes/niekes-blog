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

		$default_image="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"; //replace this with a default image on your server or an image in your media library
		echo '<meta property="og:image" content="' . $default_image . '"/>';
	}

	// Add new API endpoint: editlink
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

	// Get editlink and return REST RESPONSE
	function edit_link_route_callback(WP_REST_Request $request) {
		$new_data = array('editPostLink' => get_edit_post_link($request['post'], ''));
		$response = new WP_REST_Response($new_data);
		return $response;
	}

	// Change post preview button url
	function change_preview_link() {
		return get_home_url() . '/posts/' . basename(get_permalink());
	}

	// Change permalink structure
	function edit_the_permalink($url) {
		$path = parse_url($url, PHP_URL_PATH);
		return $path;
	}
}

$ngTheme = new wp_ng_theme();
add_action('wp_enqueue_scripts', array($ngTheme, 'enqueue_scripts'));
add_action('wp_head', array($ngTheme, 'enqueue_scripts'));
add_action('rest_api_init', array($ngTheme, 'edit_link_route'));
add_filter('preview_post_link', array($ngTheme, 'change_preview_link'));
add_filter('post_link', array($ngTheme, 'edit_the_permalink'));
// @todo add fb thumbnail: http://www.wpbeginner.com/wp-themes/how-to-add-facebook-open-graph-meta-data-in-wordpress-themes/
?>
