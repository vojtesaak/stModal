/**
 * Created by Václav Oborník on 25. 8. 2015.
 */

'use strict';

var can = require('can');


can.Component.extend({

    tag: 'prompt-modal',

    viewModel: {

        $element: null,

        yes: function () {
            this.$element.trigger('modal-resolve', true);
        },

        no: function () {
            this.$element.trigger('modal-resolve', false);
        }

    },

    init: function (element) {
        this.viewModel.attr('$element', can.$(element));
    }

});