/**
 * Created by nikhileshc on 9/12/2016.
 */
/*global requirejs,menuItems,$,jQuery*/
if (requirejs) {
    require.config({
        paths: {
            config: 'config',
            angularJs: 'AngularJS/angular.min',
            bootstrap: 'bootstrap-3.3.7-dist/js/bootstrap.min'
        }
    });
    //now load the dependencies accordingly
    requirejs(['config', 'angularJs', 'bootstrap'], function(config) {
        console.log(config, menuItems, $('html'), angular);
    });
} else {
    console.log('You do not have require JS initialised');
}