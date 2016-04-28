/**
 * Created by Václav Oborník on 22. 8. 2015.
 */

'use strict';

var can = require('can');

require('./js/modal');
require('bootstrap-js/modal');
require('./less/main.less!');

var templates = require('./js/utils/templates');


// a little evil global listener for multiple modals - todo refactor this
can.$(document).on('show.bs.modal', '.modal', function () {
    var zIndex = 11000 + (10 * $('.modal:visible').length);
    $(this).css('z-index', zIndex);
    setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
    }, 0);
});


/**
 *
 * @param {string} templateUrl
 * @param {Object} [data]
 * @param {Object} [helpers]
 * @constructor
 */
function Modal(templateUrl, data, helpers) {
    this._templateUrl = templateUrl;
    this._data = data;
    this._helpers = helpers;
}

/**
 * @static
 * @param err
 * @param {MessagesContainer} [messages]
 * @return {Modal}
 */
Modal.createErrorModal = function (err, messages) {

    var message;

    if (err && err.responseJSON && messages) {
        message = messages.getMessage(err.responseJSON.code);
    }

    if (!message) {
        if (err && err.responseJSON && err.responseJSON.error) {
            message = err.responseJSON.error;

        } else if(err && err.responseText) {
            message = err.responseText;

        } else if(err) {
            message = '' + err;

        } else {
            message = 'That\'s all we know.'
        }
    }

    return new Modal('../templates/modalMessage', {
        title: 'Something went wrong',
        message: message
    });
};

Modal.prototype = {

    _templateUrl: null,

    _data: null,

    /**
     * @returns {can.Deferred}
     */
    open: function () {

        var deferred = can.Deferred();

        var dialogTemplate = templates.get(this._templateUrl);

        can.$('body').prepend(dialogTemplate(this._data || {}, this._helpers || {}));

        var $modal = can.$('#modal');

        $modal.modal({ backdrop: true, keyboard: false })
            .on({

                'modal-resolve': function (event, value) {
                    deferred.resolve(value);
                    $modal.modal('hide'); // note: this will trigger 'hidden.bs.modal'
                },

                'modal-reject': function (event, value) {
                    deferred.reject(value);
                    $modal.modal('hide'); // note: this will trigger 'hidden.bs.modal'
                },

                'hidden.bs.modal': function () {

                    if(deferred.state() === 'pending') {
                        deferred.reject();
                    }

                    if($modal.parent().is('modal')) { //not every modal template has to use the <modal></modal> component
                        $modal.parent().remove(); //remove the <modal> element

                    } else {
                        $modal.remove();
                    }
                }
            });

        return deferred;
    }

};

module.exports = Modal;