/**
 * Created by Václav Oborník on 22. 8. 2015.
 */

'use strict';

var can = require('can');
var templates = require('./utils/templates');


can.Component.extend({

    tag: 'modal',

    template: templates.get('../node_modules/stmodal/src/templates/modal')

});