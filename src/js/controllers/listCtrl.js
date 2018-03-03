'use strict';

app.controller('listCtrl', function(DEFAULT, $rootScope, $state, posts) {

    var $listCtrl = this;

    function init(){

        $rootScope.metaTitle        = '';
        $rootScope.isLoading        = true;
        $rootScope.metaCanonical    = DEFAULT.CANONICAL;
        $rootScope.metaDescription  = DEFAULT.DESCRIPTION;
        $rootScope.metaKeywords     = $state.current.data.keywords.toString();

        $listCtrl.footer = DEFAULT.FOOTER;
        $listCtrl.posts  = posts.query(function(){
            $rootScope.isLoading = false;
        });

    }

    init();

});
