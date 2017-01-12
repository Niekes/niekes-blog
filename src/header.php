<!DOCTYPE>
<html <?php language_attributes(); ?> data-ng-app="app">
<head>
  	<meta charset="<?php bloginfo('charset'); ?>" />
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  	<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
  	<meta name="author" content="Ciplex">
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  	<link rel="shortcut icon" href="/favicon.ico">
  	<link rel="apple-touch-icon" href="/favicon.png">
   	<?php wp_head();?>
    <!--[if lt IE 9]>
	    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
</head>
<body class="blog">
<div class="container">
    <div class="row">
		<div class="columns eleven offset-by-one">
			<h1 data-ng-class="{ loading: loadingStatus }">
				<a data-ui-sref="list">
					<?php echo bloginfo('name'); ?>
				</a>
			</h1>
        </div>
	</div>