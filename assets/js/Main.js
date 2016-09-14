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
            uiEnhancements: 'ui/UIEnhancements',
            rSlider: 'revolutionSlider/revolution.min'
        }
    });
    //now load the dependencies accordingly
    requirejs(['config', 'angularJs', 'lodash', 'bootstrap', 'uiEnhancements', 'rSlider'], function() {
        $(document).ready(function(){
            var loader = $('#loader'),
                pageContent = $('.page-content');
            //slider related code
            $('.tp-banner').show().revolution({
                    delay:8000,
                    startwidth:1170,
                    startheight:480,

                    onHoverStop:"on",                       // Stop Banner Timer at Hover on Slide on/off

                    thumbWidth:100,                         // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                    thumbHeight:50,
                    thumbAmount:3,

                    hideThumbs:0,
                    navigationType:"bullet",                // bullet, thumb, none
                    navigationArrows:"solo",                // nexttobullets, solo (old name verticalcentered), none

                    navigationStyle:"round",                // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


                    navigationHAlign:"center",              // Vertical Align top,center,bottom
                    navigationVAlign:"bottom",                 // Horizontal Align left,center,right
                    navigationHOffset:0,
                    navigationVOffset:20,

                    soloArrowLeftHalign:"left",
                    soloArrowLeftValign:"center",
                    soloArrowLeftHOffset:20,
                    soloArrowLeftVOffset:0,

                    soloArrowRightHalign:"right",
                    soloArrowRightValign:"center",
                    soloArrowRightHOffset:20,
                    soloArrowRightVOffset:0,

                    touchenabled:"on",                      // Enable Swipe Function : on/off



                    stopAtSlide:-1,                         // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
                    stopAfterLoops:-1,                      // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

                    hideCaptionAtLimit:0,                   // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
                    hideAllCaptionAtLilmit:0,               // Hide all The Captions if Width of Browser is less then this value
                    hideSliderAtLimit:0,                    // Hide the whole slider, and stop also functions if Width of Browser is less than this value


                    fullWidth:"on",

                    shadow:0
                });
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