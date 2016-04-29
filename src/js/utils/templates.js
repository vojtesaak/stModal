
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



        if (templateCb && typeof templateCb === 'function') {
            return templateCb(templateName);
        }

        return function(data, helpers) {

            var template = can.view({
                url: templateName + '.handlebars',
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
