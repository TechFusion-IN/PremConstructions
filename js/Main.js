/**
 * Created by nikhileshc on 9/12/2016.
 */
/*global requirejs,menuItems*/
if (requirejs) {
    requirejs(['config'], function(config) {
        console.log(menuItems);
    });
} else {
    console.log('You do not have require JS initialised');
}