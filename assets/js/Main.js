/**
 * Created by nikhileshc on 9/12/2016.
 */
/*global requirejs,menuItems,$,jQuery*/
if (requirejs) {
    require.config({
        paths: {
            config: 'config',
            angularJs: 'AngularJS/angular.min',
            lodash: 'lodash/lodash.core',
            bootstrap: 'bootstrap-3.3.7-dist/js/bootstrap.min',
            uiEnhancements: 'ui/UIEnhancements'
        }
    });
    //now load the dependencies accordingly
    requirejs(['config', 'angularJs', 'lodash', 'bootstrap', 'uiEnhancements'], function() {
        $(document).ready(function(){
            var loader = $('#loader'),
                pageContent = $('.page-content');
            loader.fadeOut(800, function(){
                loader.remove();
                pageContent.toggleClass('hide-content');
            });
        });
        console.log(menuItems, $('html'), angular);
    });
} else {
    console.log('You do not have require JS initialised');
}