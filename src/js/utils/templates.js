
'use strict';

var can = require('can');


can.view.ext = '.stache';
can.view.cache = false;

var templates = {

    _staticAddress: '/src',


    /**
     *
     * @param {String} templateName
     * @param {Function} [templateCb]
     * @returns {Function}
     */
    get: function (templateName, templateCb) {



        if (templateCb && typeof templateCb === 'function') {
            return templateCb(templateName);
        }

        var templateAddress = this._staticAddress + '/'+ templateName + '.handlebars';
        console.log(templateAddress);
        return function(data, helpers) {

            var template = can.view({
                url: templateAddress,
                engine: 'stache'
            });

            if (typeof template === 'undefined') {
                alert('Template not loaded');
                return can.view(can.view.stache('templateNotFound', 'Template not loaded'))();
            } else {
                return template(data, helpers);
            }
        };
    }

};

module.exports = templates;
