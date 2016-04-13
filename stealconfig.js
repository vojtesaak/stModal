
'use strict';

var basePath = '../..';
var absolutePath = System.baseURL.replace(/\/$/, '');

System.paths.can = absolutePath + '/node_modules/can/dist/amd/*.js';
System.paths.jquery = absolutePath + '/node_modules/jquery/dist/jquery.js';
System.paths.stloader = absolutePath + '/node_modules/stloader/src/js/index.js';
System.paths['stmodal/*'] = absolutePath + '/node_modules/stmodal/src/*.js';
System.paths['stform/*'] = absolutePath + '/node_modules/stform/*.js';
System.paths['can/*'] = absolutePath + '/node_modules/can/dist/amd/can/*.js';
System.paths['lodash/*'] = absolutePath + '/node_modules/lodash/*.js';
System.paths['can/view/*'] = absolutePath + '/node_modules/can/dist/amd/can/view/*.js';
System.paths['bootstrap-js/*'] = absolutePath + '/node_modules/bootstrap/js/*.js';

