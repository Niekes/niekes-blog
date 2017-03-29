<!DOCTYPE>
<html <?php language_attributes(); ?> data-ng-app="app">
<head>
  	<meta charset="<?php bloginfo('charset'); ?>" />
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  	<title data-ng-bind="'Niekes Blog' + metaTitle"></title>
  	<meta name="author" content="Stefan Nieke">
    <meta name="description" content="<?php bloginfo('description'); ?>" />
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  	<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/img/favicon.ico">
  	<link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/img/favicon.ico">
    <meta name="google-site-verification" content="1YYtDKHkjWHdV38-KfK8HVt7k7tNUSc7yUUrVcqFpGw" />
   	<?php wp_head();?>
    <!--[if lt IE 9]>
	    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
    <base href="/">
</head>
<body class="blog">
<div class="container">
    <div class="row">
		<div class="col-lg-12">
			<a id="blogHeader" data-ui-sref="list">
                <h1>
					<?php echo bloginfo('name'); ?>
                </h1>
			</a>
        </div>
	</div>
