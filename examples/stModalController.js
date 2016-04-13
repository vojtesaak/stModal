
var can = require('can');
var stache = require('can/view/stache');

var Modal = require('../src/js/index');
//require('../src/js/index');
require('../src/js/promptModal');



can.Component.extend({

    tag: 'my-component',

    template: function (data, options) {

        var template = can.view({
            url: 'page.handlebars'
        });

        var tpl = $('<div>').append(template(data, options)).html();
        return stache(tpl)(data, options);
    },


    viewModel: {

        showModal: function () {
            var modal = new Modal('templates/modalPrompt', {
                message: 'Hello world!',
                title: 'This is modal title'
            });
            modal.open()
                .then(function (res) {
                    if (res) {
                        return alert('You Clicked YES!');
                    }
                    alert('You Clicked NO!');
                });
        }

    }

});


var template = stache("<my-component />");
can.$("body").append(template());
