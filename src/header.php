<!DOCTYPE>
<html <?php language_attributes(); ?> data-ng-app="app">
<head>
  	<title data-ng-bind="'Niekes Blog' + metaTitle"></title>
    <meta property="og:title" content="Niekes Blog" />
    <meta name="keywords" content="{{metaKeywords}}">
    <meta name="description" content="{{metaDescription}}" />
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="author" content="Stefan Nieke">
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="google-site-verification" content="1YYtDKHkjWHdV38-KfK8HVt7k7tNUSc7yUUrVcqFpGw" />
    <link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/img/favicon.ico">
    <link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/img/favicon.ico">
   	<?php wp_head();?>
    <!--[if lt IE 9]>
	    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
    <base href="/">
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    </script>
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
