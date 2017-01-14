<!DOCTYPE>
<html <?php language_attributes(); ?> data-ng-app="app">
<head>
  	<meta charset="<?php bloginfo('charset'); ?>" />
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  	<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
  	<meta name="author" content="Ciplex">
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  	<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/img/favicon.ico">
  	<link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/img/favicon.ico">
   	<?php wp_head();?>
    <!--[if lt IE 9]>
	    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />

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