
'use strict';

var can = require('can');


can.view.ext = '.stache';
can.view.cache = false;

var templates = {

   // _staticAddress: '/src',


    /**
     *
     * @param {String} templateName
     * @param {Function} [templateCb]
     * @returns {Function}
     */
    get: function (templateName, templateCb) {


        var self = this;

        if (templateCb && typeof templateCb === 'function') {
            return templateCb(templateName);
        }

        var templateAddress = '/'+ templateName + '.handlebars';

        return function(data, helpers) {

            var template = self._getTemplate(templateAddress);

            if (typeof template === 'undefined') {

                var defTemplate = self._getTemplate(window.location.origin + '/node_modules/stmodal/src/templates' + templateAddress);
                if (typeof defTemplate === 'undefined') {
                    return defTemplate(data, helpers);
                }

                alert('Template not loaded');
                return can.view(can.view.stache('templateNotFound', 'Template not loaded'))();
            } else {
                return template(data, helpers);
            }
        };
    },

    _getTemplate: function (templateAddress) {
        return can.view({
            url: templateAddress,
            engine: 'stache'
        });
    }

};

module.exports = templates;
