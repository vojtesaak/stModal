/**
 * Created by Václav Oborník on 22. 8. 2015.
 */

'use strict';

var can = require('can');
//var templates = require('./utils/templates');

var templates = require('./templates');


can.Component.extend({

    tag: 'modal',

    template: templates.getTemplate('modal')

});