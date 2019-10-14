define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/additional-validators',
        'Apriljune_Custom/js/model/add-validator'
    ],
    function (Component, additionalValidators, yourValidator) {
        'use strict';
        additionalValidators.registerValidator(yourValidator);
        return Component.extend({});
    }
);