/**
 * Created by nikhileshc on 9/14/2016.
 */
/*global $,_*/

$(document).ready(function(){
    $('[data-toggle="collapse"]').on('click', function() {
        $(this).toggleClass('collapsed');
    });
    $('.dropdown').on('show.bs.dropdown', function () {
        if(!$(this).has('ul').length) {
            return;
        }
        $(this).fadeTo('fast', 1);
        $('#navbar-dropdown').children().not(this).fadeTo( "fast", 0.4 );
    });
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $('#navbar-dropdown').children().fadeTo('fast', 1);
    });
});