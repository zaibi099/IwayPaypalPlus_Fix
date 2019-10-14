define(
    ['jquery'],
    function () {
        'use strict';
        return {
            /**
             * Validate something
             *
             * @returns {boolean}
             */
            validate: function() {

                var isValid = true;

                var otherPayMethod = jQuery('.payment-method._active').not('.paypalplus-active').length;
                
                if( otherPayMethod == 1 ) {
                    
                    jQuery('.payment-method._active.paypalplus-active').find('.checkout-agreements-block input').each(function(){
                        jQuery(this).prop('checked',true);
                    });

                    var element = jQuery('.payment-method._active').not('.paypalplus-active');
                    jQuery(element).find('.checkout-agreements-block input').each(function(){
                        if( !jQuery(this).is(':checked') ) {
                            isValid = false;
                        }
                    });
                }
                
                return isValid;
            }
        }
    }
);